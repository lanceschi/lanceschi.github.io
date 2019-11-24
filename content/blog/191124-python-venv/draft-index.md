---
title: Python Virtual Environments
date: "2019-11-24T19:47:03.284Z"
description: Python Virtual Environments
tags: ["pyhton", "how-to"]
---
https://realpython.com/python-virtual-environments-a-primer/
https://gist.github.com/developius/c81f021eb5c5916013dc
https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
https://mathiasbynens.github.io/rel-noopener/

Assuming you’re not using **Python 3**, you can install the virtualenv tool with **pip**:

```bash
$ pip install virtualenv
```

### Activate
```bash
$ source env/bin/activate
(env) $
```

### Deactivate
```bash
(env) $ deactivate
$
```


### Delete
```bash
(env) $ deactivate
$ rm -rf venv
```