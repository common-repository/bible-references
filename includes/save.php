<?php
if ( ! defined('ABSPATH') ) { exit( __( 'Sorry, you are not allowed to access this page directly.', 'bible-references' ) ); }
function bibleonline_ru_activate() {
	bibleonline_ru_save( true );
}
function bibleonline_ru_save( $updated = false ) {
	if ( function_exists('current_user_can') && !current_user_can('manage_options') ) {
		die( __( 'Sorry. You do not have permission to do this.', 'bible-references' ) );
	}
	include( 'fieldset.php' );
	if ( isset( $_POST['submit'] ) ) {
		foreach ( $fieldset as $id => $info ) {
			if ( $options[$id] != $_POST[$id] ) {
				$v_post = $_POST[$id];
				update_option( 'ru.bibleonline.ref.' . $id, $v_post );
			}
		}
		$id = 'NoTags';
		if ( $options[$id] != $_POST[$id] ) {
			$v_post = trim( preg_replace( '/[^a-z0-9]+/i', ' ', $_POST[$id] ) );
			update_option( 'ru.bibleonline.ref.' . $id, $v_post );
		}
		foreach ( array_keys( $NoTags['data'] ) as $id ) {
			$v_post = isset( $_POST['NoTags' . $id] ) ? 1 : 0;
			if ( $options['NoTags.' . $id] != $v_post ) {
				update_option( 'ru.bibleonline.ref.NoTags.' . $id, $v_post );
			}
		}
		$updated = true;
	} elseif ( isset( $_POST['reset'] ) ) {
		foreach ( $fieldset as $id => $info ) {
			delete_option( 'ru.bibleonline.ref.' . $id );
		}
		delete_option( 'ru.bibleonline.ref.NoTags' );
		foreach ( array_keys( $NoTags['data'] ) as $id ) {
			delete_option( 'ru.bibleonline.ref.NoTags.' . $id );
		}
		$updated = true;
	}
	if ( $updated ) {
		include( 'fieldset.php' );
		$script = array( '<script>(function(w) {function init() {' );
		foreach ( $fieldset as $id => $info ) {
			if ( $info['form'] != 'bool' ) {
				$value = '"' . esc_attr( $options[$id] ) . '"';
			} else {
				$value = $options[$id] ? 'true' : 'false';
			}
			$script[] =sprintf( 'bibleRef.conf("%s",%s);', $id, $value );
		}
		$script[] = '}if(w.addEventListener) {w.addEventListener("load",function() {init()},false);}else{w.attachEvent("onload",function() {init()});}})(window);</script>';
		update_option( 'ru.bibleonline.ref', join( '', $script ) );
	}
}

?>
