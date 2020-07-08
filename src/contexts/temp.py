import pandas as pd

data = pd.read_csv("recommend.csv")
print(data.columns)
for i in list(data.items):
	print(i)