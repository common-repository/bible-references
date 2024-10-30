<?php
if ( ! defined('ABSPATH') ) { exit( __( 'Sorry, you are not allowed to access this page directly.', 'bible-references' ) ); }
$fieldset = array(
	'Translate' => array(
		'title' => __( 'Translate', 'bible-references' ),
		'type' => 'select',
		'dflt' => 'rus',
		'data' => array(
			'rus' => sprintf( '%s (%s)', 'Русский синодальный перевод', __( 'Russian', 'bible-references' ) ),
			'nrt' => sprintf( '%s (%s)', 'Новый русский перевод', __( 'Russian', 'bible-references' ) ),
			'cars' => sprintf( '%s (%s)', 'Восточный перевод', __( 'Russian', 'bible-references' ) ),
			'ukr' => sprintf( '%s (%s)', 'Український переклад І. Огієнка', __( 'Ukrainian', 'bible-references' ) ),
			'eng' => sprintf( '%s (%s)', 'King James Version', __( 'English', 'bible-references' ) ),
			'deu' => sprintf( '%s (%s)', 'Deutsche Luther', __( 'German', 'bible-references' ) ),
			'bel' => sprintf( '%s (%s)', 'Беларускі пераклад', __( 'Belarusian', 'bible-references' ) ),
			'ron' => sprintf( '%s (%s)', 'Română traducere', __( 'Romanian', 'bible-references' ) ),
			'spa' => sprintf( '%s (%s)', 'Traducción al español', __( 'Spanish', 'bible-references' ) ),
			'fra' => sprintf( '%s (%s)', 'Traduction française', __( 'French', 'bible-references' ) ),
			'ell' => sprintf( '%s (%s)', 'Ελληνική μετάφραση', __( 'Greek', 'bible-references' ) ),
			'ita' => sprintf( '%s (%s)', 'Traduzione italiana', __( 'Italian', 'bible-references' ) ),
			'por' => sprintf( '%s (%s)', 'Tradução português', __( 'Portuguese', 'bible-references' ) ),
			'tur' => sprintf( '%s (%s)', 'Türkçe çeviri', __( 'Turkish', 'bible-references' ) ),
			'zho' => sprintf( '%s (%s)', '中文 汉译', __( 'Chinese', 'bible-references' ) ),
		)
	),
	'Target' => array(
		'title' => __( 'Open links in', 'bible-references' ),
		'type' => 'select',
		'dflt' => '_blank',
		'data' => array( '_blank' => __( 'New window', 'bible-references' ), '_top' => __( 'Existing window', 'bible-references' ) )
	),
	'ToolTipUse' => array(
		'title' => __( 'ToolTips', 'bible-references' ),
		'type' => 'select',
		'dflt' => '1',
		'data' => array( 1 => __( 'Show', 'bible-references' ), 0 => __( "Don't show", "bible-references" ) ),
		'form' => 'bool',
	),
	'BibleClass' => array(
		'title' => __( 'Search in title="..." for next class="..."', 'bible-references' ),
		'type' => 'input',
		'dflt' => 'biblref',
	),
	'NoBibleClass' => array(
		'title' => __( 'Do not search in title="..." for next class="..."', 'bible-references' ),
		'type' => 'input',
		'dflt' => 'nobiblref',
	),
	'CSS' => array(
		'title' => __( 'CSS stylesheet', 'bible-references' ),
		'type' => 'input',
		'dflt' => 'https://api.bibleonline.ru/ref/style.css',
	),
	'VSeparator' => array(
		'title' => __( 'Separators chapter from verses', 'bible-references' ),
		'type' => 'input',
		'dflt' => ':.',
	),
	'RSeparator' => array(
		'title' => __( 'Separators verse from verses', 'bible-references' ),
		'type' => 'input',
		'dflt' => ',',
	),
	'CSeparator' => array(
		'title' => __( 'Separators of group chapters', 'bible-references' ),
		'type' => 'input',
		'dflt' => ';',
	),
);
$NoTags = array(
	'title' => __( 'Do not search in the following HTML tags', 'bible-references' ),
	'data' => array(
		'b_strong'	=> __( 'Bold', 'bible-references' ),
		'i_em'		=> __( 'Italic', 'bible-references' ),
		'u'		=> __( 'Underline', 'bible-references' ),
		'ol'		=> __( 'Ordered list', 'bible-references' ),
		'ul'		=> __( 'Unordered list', 'bible-references' ),
		'span'		=> __( 'Inline block', 'bible-references' ),
		'blockquote'	=> __( 'Block quotation', 'bible-references' ),
		'h1'		=> __( 'Heading 1st level', 'bible-references' ),
		'h2'		=> __( 'Heading 2nd level', 'bible-references' ),
		'h3'		=> __( 'Heading 3rd level', 'bible-references' ),
		'h4'		=> __( 'Heading 4th level', 'bible-references' ),
		'h5'		=> __( 'Heading 5th level', 'bible-references' ),
		'h6'		=> __( 'Heading 6th level', 'bible-references' ),
	),
	'dflt' => array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ),
);
$options = array();
foreach ( $fieldset as $id => $info ) {
	$options[$id] = get_option( 'ru.bibleonline.ref.' . $id, $info['dflt'] );
	if ($id == 'CSS' && ($options[$id] == 'https://api.bibleonline.ru/ref/style.css' ||  preg_match('/^\s*$/',$options[$id]) )) {
		$options[$id] = 'https://api.bibleonline.ru/ref/style.css';
	}
}
$options['NoTags'] = get_option( 'ru.bibleonline.ref.NoTags', '' );
foreach ( array_keys( $NoTags['data'] ) as $id ) {
	$options['NoTags.' . $id] = get_option( 'ru.bibleonline.ref.NoTags.' . $id, in_array( $id, $NoTags['dflt'] ) ? 1 : 0 );
}

?>
