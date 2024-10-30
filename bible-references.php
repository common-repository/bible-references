<?php
/*
Plugin Name: Bible Online References
Plugin URI: https://www.bibleonline.ru/tools/ref/
Description: Scans the site for Bible references. Once it finds a Bible reference it will be converted into a hoverable link.
Author: BibleOnline.ru
Version: 2.7.12
Author URI: https://bibleonline.ru/
*/

if ( ! defined('ABSPATH') ) { exit( __( 'Sorry, you are not allowed to access this page directly.', 'bible-references' ) ); }

define('BIBLEONLINE_RU_VERSION', '2.7.12');

function bibleonline_ru_addscript() {
	if ( ! is_admin() ) {
		echo get_option( 'ru.bibleonline.ref' );
	}
}
function bibleonline_ru_init() {
	if ( ! is_admin() ) {
		wp_enqueue_script( 'BibleOnlineRef', plugins_url( 'js/bible.js?v=' . BIBLEONLINE_RU_VERSION , __FILE__ ), false, false, BIBLEONLINE_RU_VERSION, true );
	} else {
		load_plugin_textdomain( 'bible-references', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		if (function_exists('wp_get_current_user') && function_exists('current_user_can') && current_user_can('manage_options') ) {
			include_once('includes/control.php');
		}
	}
}

add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);
function add_defer_attribute($tag, $handle) {
	if ( 'BibleOnlineRef' !== $handle ) { return $tag; }
	return str_replace( ' src', ' defer="defer" src', $tag );
}

function bibleonline_ru_install() {
	include_once('includes/save.php');
	bibleonline_ru_activate();
}

if ( defined('ABSPATH') && defined('WPINC') ) {
	add_action( 'init', 'bibleonline_ru_init', 1, 0 );
	add_action( 'wp_footer', 'bibleonline_ru_addscript', 1, 0 );
	if (function_exists('wp_get_current_user') && function_exists('current_user_can') && current_user_can('manage_options') ) {
		register_activation_hook( __FILE__, 'bibleonline_ru_install' );
	}
}

?>
