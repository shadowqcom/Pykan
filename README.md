# Pykan.org

# Kolmogorov-Arnold Networks (KANs)
![pykan](../static/326218913-a2d2d225-b4d2-4c1e-823e-bc45c7ea96f9.png)

Kolmogorov-Arnold Networks (KAN) 是多层感知器 (MLP) 的有前途的替代品。 KAN 与 MLP 一样具有强大的数学基础：MLP 基于通用逼近定理，而 KAN 基于 Kolmogorov-Arnold 表示定理。 KAN 和 MLP 是双重的：KAN 在边上具有激活函数，而 MLP 在节点上具有激活函数。这个简单的改变使得 KAN 在模型准确性和可解释性方面都比 MLP 更好（有时更好！）。  


## Installation

[](https://github.com/KindXiaoming/pykan#installation)

Pykan can be installed via PyPI or directly from GitHub.

#### Pre-requisites:

```
Python 3.9.7 or higher
pip
```

#### Installation via github

```
python -m venv pykan-env
source pykan-env/bin/activate  # On Windows use `pykan-env\Scripts\activate`
pip install git+https://github.com/KindXiaoming/pykan.git
```

#### Installation via PyPI:

```
python -m venv pykan-env
source pykan-env/bin/activate  # On Windows use `pykan-env\Scripts\activate`
pip install pykan
```

#### Requirements

```python
# python==3.9.7
matplotlib==3.6.2
numpy==1.24.4
scikit_learn==1.1.3
setuptools==65.5.0
sympy==1.11.1
torch==2.2.2
tqdm==4.66.2
```

After activating the virtual environment, you can install specific package requirements as follows:

```python
pip install -r requirements.txt
```

#### **Optional: Conda Environment Setup** For those who prefer using Conda:

```
conda create --name pykan-env python=3.9.7
conda activate pykan-env
pip install git+https://github.com/KindXiaoming/pykan.git  # For GitHub installation
# or
pip install pykan  # For PyPI installation
```