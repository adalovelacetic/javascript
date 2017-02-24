/* <nowiki>
; Original source: //pl.wikipedia.org/wiki/MediaWiki:Wikibugs.js
; Russian adaptation: [[:ru:User:Александр Сигачёв]], [[:ru:User:Putnik]], [[:ru:User:LEMeZza]]
; English adaptation: [[:ru:User:Claymore]]
; Spanish adaptation: [[:es:User:Emijrp]]

; Original idea: [[:pl:User:Dodek]], [[:pl:User:Adziura]]
; Implementation: [[:pl:User:Nux]], [[:pl:User:Saper]], [[:pl:User:Beau]], [[:ru:User:Putnik]]
*/

// No mostrar en las páginas excluidas, para ello se cargará un CSS que lo ocultará
var paginasExcluidas = [
   "Wikipedia:Portada", "Wikipedia:Informes_de_error",
   "MSN", "Hotmail", "Facebook", "Twitter", "Skype", "Amazon", "Windows_Live_Messenger", "Correo_Yahoo!", "Windows_Live", "Internet_Explorer"
];

if ($.inArray( mw.config.get( 'wgNamespaceNumber' ), [ -1 , 6 , 7 , 8 ]) > -1) {
   //importStylesheet('MediaWiki:Wikibugs.css')
   mw.util.addCSS( 'li#n-bug_in_article { display: none }' );
} else {
   for (var i=paginasExcluidas.length; i>=0; i--) {
      if (mw.config.get( 'wgPageName' )==paginasExcluidas[i]) {
          //importStylesheet('MediaWiki:Wikibugs.css')
          mw.util.addCSS( 'li#n-bug_in_article { display: none }' );
          break
      }
   }
}

var wb$description = "Por favor, danos la máxima información posible acerca del error que has encontrado. A ser posible indica una referencia o sitio web que permita una verificación del dato."


$(function()
{
  var el = document.getElementById('n-bug_in_article')
 
  if (el)
    el.getElementsByTagName('a')[0].onclick = wb$popWikibug
})
 
function wb$popWikibug()
{
  var link_wiki = window.mw.config.get( 'wgArticlePath' ).replace(/\$1/, 'wiki')
  var link_tocreate = window.mw.config.get( 'wgArticlePath' ).replace(/\$1/, 'Wikipedia:Artículos_solicitados')
  var link_bebold = window.mw.config.get( 'wgArticlePath' ).replace(/\$1/, 'Wikipedia:Sé_valiente_editando_páginas')
  var link_buglist = window.mw.config.get( 'wgArticlePath' ).replace(/\$1/, 'Wikipedia:Informes_de_error')
 
  wb$popBugBoth("Wikipedia:Informes de error", '\
    <p><b>Este sistema es <u>únicamente</u> para informar errores en los artículos de Wikipedia</b>.</p>\
    <div style="float:right;width:200px;padding:4px 10px;margin:2px 0px 0px 10px;font-size:90%;border:2px solid #900"><p><b>No informes</b> de errores en otros sitios (como <b>Facebook</b> o <b>Twitter</b>), no serán atendidos.</p>\
    <p>Por favor, no informes de artículos que faltan, lo correcto es enviar una <a href="' + link_tocreate + '">solicitud de creación</a>.</p></div>\
    <p style="margin-top:0">Si has encontrado un error, por favor, intenta arreglarlo tú mismo, la <a href="' + link_wiki + '" target="_blank">tecnología wiki</a> permite que cualquiera pueda <strong><a href="//es.wikipedia.org/wiki/Ayuda:Introducción" target="_blank">editar artículos</a></strong>.</p>\
    <p>No dudes en hacerlo, una de las reglas de Wikipedia dice «¡<a href="' + link_bebold + '" target="_blank">sé valiente editando páginas</a>!».</p>\
    <p>Si no puedes o no sabes arreglar el error, entonces infórmanos de él usando este formulario.</p>\
    <p style="color:red"><b><u>No</u> dejes tu número de teléfono ni tu e-mail</b>.</p>\
    <p><a href="' + link_buglist + '" target="_blank">Ver los informes de error actuales</a>.</p>\
    <p>Lee los <a href="//wikimediafoundation.org/wiki/Términos_de_Uso" target="_blank">términos de uso</a> y la <a href="//wikimediafoundation.org/wiki/Política_de_privacidad" target="_blank">política de privacidad</a>.</p>\
    ')
  return false
}
 
function wb$getEditToken(page)
{
  var objhttp = (window.XMLHttpRequest) ? new XMLHttpRequest(): new ActiveXObject('Microsoft.XMLHTTP')
  if (!objhttp)
    return
  objhttp.onreadystatechange=function() {
    if (objhttp.readyState == 4) {
      if (objhttp.status == 200) {
        var r_sti = /value="(\d+)" name=["']wpStarttime["']/
        var r_eti = /value="(\d+)" name=["']wpEdittime["']/
        var r_etk = /value="(.*?)" name=["']wpEditToken["']/
        var r_asm = /name="wpAutoSummary" type="hidden" value="(.*?)"/
        sti = r_sti.exec(objhttp.responseText)
        eri = r_eti.exec(objhttp.responseText)
        etk = r_etk.exec(objhttp.responseText)
        asm = r_asm.exec(objhttp.responseText)
        document.getElementById('Starttime').value=sti[1]
        document.getElementById('Edittime').value=eri[1]
        document.getElementById('EditToken').value=etk[1]
        document.getElementById('AutoSummary').value=asm[1]
      }
      else
        alert(objhttp.status)
    }
  }
  objhttp.open("GET", mw.config.get( 'wgServer' )+mw.config.get( 'wgScript' )+"?title="+encodeURIComponent(page)+"&action=edit")
  objhttp.send("")
}
 
function wb$isValidPageName(name)
{
  if (name=="")
    return false
  else
    return true
}
 
function wb$checkForm(form)
{
  var page = form.wpSummary.value
  var content = form.wpTextbox1.value

  if ($.inArray( content, [ "" , wb$description  ]) > -1|| content.length<20 || !content.match(' ')) {
    alert("El reporte es demasiado corto, por favor, añade más detalles.")
    form.wpTextbox1.focus()
    return false
  }
 
  page = page.replace(/^https?:\/\/es\.wikipedia\.org\/wiki\/(.+)$/, "$1")
  page = page.replace(/_/g, " ")
  page = decodeURIComponent(page)
 
  if (page == mw.config.get( 'wgPageName' ).replace(/_/g, " ") && wb$isValidPageName(mw.config.get( 'wgPageName' ))) {
      page = page.replace(/^(Categoría:|\/)/, ":$1")
      page = "[["+page+"]]"
  } else {
    page = page.replace(/\[\[([^\[\]\|]+)\|[^\[\]\|]+\]\]/g, "$1")
    page = page.replace(/[\[\]\|]/g, "")
    page = page.replace(/^\s+/g, "")
    page = page.replace(/\s+$/g, "")
 
    if (! wb$isValidPageName(page) ) {
      alert("Introduce el nombre del artículo.")
      if ( wb$isValidPageName(mw.config.get( 'wgPageName' )) )
        form.wpSummary.value = mw.config.get( 'wgPageName' )
      else {
        form.wpSummary.value = ""
        form.wpSummary.focus()
      }
      return false
    }
    if (page.indexOf(':') > 0)
      page = '[[:'+page+']]'
    else
      page = '[['+page+']]'
  }
 
  form.submit.disabled = 'disabled'
 
  content += '\r\n\r\nEnviado por: --~~~~'

  form.wpTextbox1.value = content
  form.wpSummary.value = page
 
  return true
}
 
function wb$goToEditPage()
{
  var edit_el = document.getElementById('ca-edit')
  var edit_href = window.mw.config.get( 'wgArticlePath' ).replace(/\$1/, 'Wikipedia:Informes_de_error')
  if (edit_el)
    edit_href = edit_el.getElementsByTagName('a')[0].href
  window.location = edit_href
}
 
function wb$popBugBoth(action_page, infoHTML)
{
  var glob = document.body
 
  // shadow
  var nel = document.createElement('div')
  nel.id='specpop-globhidden'
  nel.style.cssText = 'background:white;filter:alpha(opacity=75);opacity:0.75;position:absolute;left:0px;top:0px;z-index:2000'
  nel.style.width = document.documentElement.scrollWidth+'px'
  nel.style.height= document.documentElement.scrollHeight+'px'
  glob.appendChild(nel)
 
  // move the dialog
  window.scroll(0, 150)
 
  // information
  var edit_el = document.getElementById('ca-edit')
  if (edit_el)
    var can_edit = true
  else
    var can_edit = false
 
  nel = document.createElement('div')
  nel.id='specpop-info'
  nel.style.cssText = 'font-size:13px;background:white;padding:21px 30px;border:1px solid black;position:absolute;width:520px;min-height:300px;top:200px;z-index:2002'
  if (nel.style.maxHeight==undefined)
    nel.style.height='300px' // IE blah
  var tmp = Math.floor(glob.clientWidth/2)-300
  if (tmp<5)
    tmp = 5
  nel.style.left = tmp+'px'
 
  nel.innerHTML	= infoHTML
  if (window.mw.config.get( 'wgUserName' ) == null)
    nel.innerHTML = nel.innerHTML + '<p><b>Atención.</b> Tu dirección IP quedará registrada en el historial y podrá verse. Puedes crearte una <a href="//es.wikipedia.org/w/index.php?title=Especial:Entrar&type=signup" target="_blank">cuenta de usuario</a>.</p>'
  nel.innerHTML	+= '<p style="text-align:center;margin-top:15px">\
    '+(can_edit ? '<input type="button" value="Voy a arreglarlo" onclick="wb$goToEditPage()" />' : '')+ '\
    <input type="button" value="Informar del error" onclick="wb$elementsRemove(\'specpop-info\')" />&nbsp;&nbsp;&nbsp;\
    <input type="button" value="Cancelar" onclick="wb$elementsRemove(\'specpop-info\',\'specpop-form\',\'specpop-globhidden\',\'specpop-pos\')" />\
    </p>'
  glob.appendChild(nel)
 
  var action_url = window.mw.config.get( 'wgServer' ) + window.mw.config.get( 'wgScript' ) + "?title=" +encodeURIComponent(action_page)  + "&action=submit"
 
  // form
  nel = document.createElement('div')
  nel.id = 'specpop-form'
  nel.style.cssText = 'background:white;padding:5px 10px;border:1px solid black;position:absolute;width:330px;min-height:300px;top:200px;z-index:2001'
  if (nel.style.maxHeight==undefined)
    nel.style.height='300px' // IE blah
  nel.style.left = (Math.floor(glob.clientWidth/2)-165)+'px'
  //nel.style.top = (this.offsetTop-100)+'px'
  nel.innerHTML	= '<form id="fm1" action="'+action_url+'" method="post" enctype="multipart/form-data" onsubmit="return wb$checkForm(this)">\
    Página:<br /><input type="text" name="wpSummary" id="wpSummary" width="320px" /><br />\
    <input type="hidden" name="wpSection" value="new" />\
    <input type="hidden" name="wpSave" value="Save" />\
    <input type="hidden" id="Starttime" name="wpStarttime" value="" />\
    <input type="hidden" id="Edittime" name="wpEdittime" value="" />\
    <input type="hidden" id="EditToken" name="wpEditToken" value="" />\
    <input type="hidden" id="AutoSummary" name="wpAutoSummary" value="" />\
    <input type="hidden" name="wpScrolltop" value="0" />\
    Mensaje:<br /><textarea id="TextBox" name="wpTextbox1" style="width:320px;height:200px" onfocus="if (this.value == wb$description) {this.value = \'\'}">' + wb$description + '</textarea><br />\
    <input type="submit" id="submit" value="Enviar" /> &nbsp; \
    <input type="button" value="Cancelar" onclick="wb$elementsRemove(\'specpop-form\',\'specpop-globhidden\',\'specpop-pos\')" />\
    </form>'
  glob.appendChild(nel)
  if (wb$isValidPageName(mw.config.get( 'wgPageName' )))
    document.getElementById('wpSummary').value = mw.config.get( 'wgPageName' ).replace(/_/g, " ")
  
  wb$getEditToken(action_page)
}
 
function wb$elementsRemove()
{
  var el
  for (var i=arguments.length-1; i>=0; i--) {
    el = document.getElementById(arguments[i])
    if (el)
      el.parentNode.removeChild(el)
  }
}

// </nowiki>