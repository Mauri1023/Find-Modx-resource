# Find MODx Resource

Simple extension for chrome where you open the resource in the MODx of the page you have open.

## Getting Started 🚀

Open the file ["resources.js"](resources.js) and edit the URLs with your resource number.


A quick way to make this listing is to create a snippet in MODx with the following code that will export its URLs in the required format:
```
<?php
$sql = 'SELECT context_key, uri, id FROM modx_site_content WHERE id BETWEEN 1 AND 8000';

$result = $modx->query($sql);
$data = $result->fetchAll(PDO::FETCH_ASSOC);

echo '"' . $data[$i]["uri"] .'": "' .  $data[$i]["id"] . '",<br>';
```

Finally, edit the ["main.js"](main.js) file with its URL and the messages you want to display.

## Installing 🔧

For installation, just drag the folder to the extension manager in Chrome (chrome://extensions/). 

## Running the tests ⚙️

Open a page on your website and click on the "Find MODx Resource" icon. The Modx resource should have been run 😊


### Authors ✒️

* **Mauricio De Oliveira** -  [mdo-uy](https://github.com/mdo-uy)
