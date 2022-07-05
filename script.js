
:root{
  --squaresize: 50px;
}

header {
  display: flex;
  justify-content: space-between;
}

main{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 7px solid salmon;
}

.random{
  display: flex;
  margin-bottom: -25px;
  height: var(--squaresize);
  width: var(--squaresize);
  justify-content: center;
  align-items: center;
}

.game{
  padding-top: calc(var(--squaresize) * 2);
  display: flex;
  justify-content: stretch;
  gap: 2rem;
}

.column{
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

