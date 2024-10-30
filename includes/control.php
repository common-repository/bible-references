<?php
if ( ! defined('ABSPATH') ) { exit( __( 'Sorry, you are not allowed to access this page directly.', 'bible-references' ) ); }

function bibleonline_ru_menu() {
	add_options_page( __( 'Bible Online References', 'bible-references' ), __( 'Bible References', 'bible-references' ), 'manage_options', __FILE__, 'bibleonline_ru_options' );
}

function bibleonline_ru_options() {
	include_once( 'optionspage.php' );
}

add_action( 'admin_menu', 'bibleonline_ru_menu' );
if ( isset($_POST['bibleonline_ru_submit']) && $_POST['bibleonline_ru_submit']) {
	include_once( 'save.php' );
	add_action( 'admin_init', 'bibleonline_ru_save' );
}
?>
