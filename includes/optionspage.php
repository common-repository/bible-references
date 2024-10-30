<?php
if ( ! defined('ABSPATH') ) { exit( __( 'Sorry, you are not allowed to access this page directly.', 'bible-references' ) ); }
screen_icon( 'options-general' );
include('fieldset.php');
function bibleonline_ru_form_select( $id, $options, $data ) {
?>
<select name="<?php echo $id; ?>" id="<?php echo $id; ?>">
<?php foreach ( $data as $k => $v ) : ?>
	<option value="<?php echo $k; ?>" <?php selected( $options[$id], $k ); ?>><?php echo $v; ?></option>
<?php endforeach; ?>
</select>
<?php
}

function bibleonline_ru_form_input( $id, $options ) {
?>
<input name="<?php echo $id; ?>" id="<?php echo $id; ?>" value="<?php echo esc_attr( $options[$id] ); ?>" />
<?php
}
function bibleonline_ru_form_checkbox( $id, $options, $data ) {
?>
<fieldset>
<legend class="screen-reader-text"><span><?php echo __( $NoTags['title'] ); ?></span></legend>
<?php foreach ( $data as $tag => $value ) : 
	$tags = '&lt;' . str_replace( '_', '&gt;, &lt;', $tag ) . '&gt;'; 
?>
	<label for="<?php echo $id; ?><?php echo $tag; ?>" title="<?php echo $value; ?>"><input type="checkbox" name="<?php echo $id; ?><?php echo $tag; ?>" id="<?php echo $id; ?><?php echo $tag; ?>" value="<?php echo $value; ?>" <?php checked( $options['NoTags.' . $tag] )  ?>/> <span><?php echo $value; ?></span> <span class="example">(<?php echo $tags; ?>)</span></label><br />
<?php endforeach ?>
	<label for="NoTags"> <?php echo __( 'Your tags', 'bible-references' ); ?>: <input type="text" name="NoTags" id="NoTags" value="<?php echo esc_attr( $options['NoTags'] ); ?>" /></label> <span class="example"><?php echo __( 'For example', 'bible-references' ); ?>: cite, div</span> <span class="spinner"></span>
	<p><a href="https://bibleonline.ru/tools/ref/#description"><?php echo __( 'Documentation', 'bible-references' ); ?></a>.</p>
	</fieldset>
<?php
}
?>
<h2><?php echo __( 'Bible References Options', 'bible-references' ); ?></h2>
<form method="post">
<input type="hidden" name="bibleonline_ru_submit" value="true">
<table class="form-table">
<tr><td width="50%" valign="top"><table class="form-table">
<?php foreach ( $fieldset as $id => $info ) : ?>
<tr><td><label for="<?php echo $id; ?>"><?php echo $info['title']; ?></label></td>
<td>
<?php
switch( $info['type'] ) {
	case 'select':	bibleonline_ru_form_select( $id, $options, $info['data'] ); break;
	case 'input':	bibleonline_ru_form_input( $id, $options ); break;
}
?>
</td></tr>
<?php endforeach; ?>
</table>
</td><td valign="top">
<h3><?php echo $NoTags['title']; ?></h3>
<?php bibleonline_ru_form_checkbox('NoTags', $options, $NoTags['data']) ?>
</td></tr>
</table>
<p class="submit"><input type="submit" name="submit" id="submit" class="button button-primary" value="<?php echo __( 'Save changes', 'bible-references' ); ?>"></p>
<form method="post">
<p class="submit"><input type="submit" name="reset" id="reset" class="button button-primary" value="<?php echo __( 'Reset to default', 'bible-references' ); ?>" onclick="return confirm('<?php echo __( 'Are you sure?', 'bible-references' ); ?>');"></p>
</form>
