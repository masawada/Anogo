SRC = anogo.js
COMPRESS = anogo.min.js

all : $(COMPRESS)

COMPILER = java -jar ~/GoogleCC/compiler.jar

$(COMPRESS) : $(SRC)
	$(COMPILER) $(addprefix --js ,$^) > $@

.PHONY: clean
clean :
	rm -f $(COMPRESS)
