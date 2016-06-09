---
title: Programming Languages and Lambda Calculi exercises
---

The manuscript can be found [here](http://www.cs.utah.edu/~mflatt/past-courses/cs7520/public_html/s06/notes.pdf).

## Part I: Models of Languages

### Chapter 1: Computing with Text

#### 1.1 Defining Sets

> - `t` ∈ *B*
> - `f` ∈ *B*
> - (*B*<sub>1</sub> • *B*<sub>2</sub>) ∈ *B*

##### Exercise 1.1

###### Question

Which of the following are in *B*? For each member of *B*, provide a proof tree showing that it must be in *B*.

1. `t`
2. •
3. ((`f` • `t`) • (`f` • `f`))
4. ((`f`) • (`t`))

###### Answer

`t` is in *B*:

    t ∈ B

((`f` • `t`) • (`f` • `f`)) is in *B*:

      f ∈ B  t ∈ B      f ∈ B  f ∈ B
    ----------------  ----------------
      (f • t) ∈ B       (f • f) ∈ B
    ---------------------------------
         ((f • t) • (f • f)) ∈ B

#### 1.2 Relations

> - (`f` • *B*<sub>1</sub>) **r** *B*<sub>1</sub>
> - (`t` • *B*<sub>1</sub>) **r** `t`

> - (`f` • *B*<sub>1</sub>) ≍<sub>**r**</sub> *B*<sub>1</sub>
> - (`t` • *B*<sub>1</sub>) ≍<sub>**r**</sub> `t`
> - *B*<sub>1</sub> ≍<sub>**r**</sub> *B*<sub>1</sub>

> - (`f` • *B*<sub>1</sub>) ≈<sub>**r**</sub> *B*<sub>1</sub>
> - (`t` • *B*<sub>1</sub>) ≈<sub>**r**</sub> `t`
> - *B*<sub>1</sub> ≈<sub>**r**</sub> *B*<sub>1</sub>
> - *B*<sub>1</sub> ≈<sub>**r**</sub> *B*<sub>2</sub> ⇒ *B*<sub>2</sub> ≈<sub>**r**</sub> *B*<sub>1</sub>
> - *B*<sub>1</sub> ≈<sub>**r**</sub> *B*<sub>2</sub> and *B*<sub>2</sub> ≈<sub>**r**</sub> *B*<sub>3</sub>
>     ⇒ *B*<sub>1</sub> ≈<sub>**r**</sub> *B*<sub>3</sub>

#### 1.4 Directed Evaluation

> - *B*<sub>1</sub> ↝↝<sub>**r**</sub> *B*<sub>1</sub>
> - *B*<sub>1</sub> **r** *B*<sub>2</sub> ⇒ *B*<sub>1</sub> ↝↝<sub>**r**</sub> *B*<sub>2</sub>
> - *B*<sub>1</sub> **r** *B*<sub>2</sub> and *B*<sub>2</sub> **r** *B*<sub>3</sub>
>     ⇒ *B*<sub>1</sub> **r** *B*<sub>3</sub>

##### Exercise 1.2

###### Question

Show that (`f` • (`f` • (`f` • `f`))) ↝↝<sub>**r**</sub> `f` by showing its reduction with the `r` one-step relation.

###### Answer

    (f • (f • (f • f))) r (f • (f • f))
                        r (f • f)
                        r f

#### 1.5 Evaluation in Context

> - *B*<sub>1</sub> **r** *B*<sub>2</sub> ⇒ *B*<sub>1</sub> →<sub>**r**</sub> *B*<sub>2</sub>
> - *B*<sub>1</sub> →<sub>**r**</sub> *B*<sub>1</sub>′
>     ⇒ (*B*<sub>1</sub> • *B*<sub>2</sub>) →<sub>**r**</sub> (*B*<sub>1</sub>′ • *B*<sub>2</sub>)
> - *B*<sub>2</sub> →<sub>**r**</sub> *B*<sub>2</sub>′
>     ⇒ (*B*<sub>1</sub> • *B*<sub>2</sub>) →<sub>**r**</sub> (*B*<sub>1</sub> • *B*<sub>2</sub>′)

> - =<sub>**r**</sub> is the equivalence closure of →<sub>**r**</sub>.

##### Exercise 1.3

###### Question

Explain why (`f` • ((`t` • `f`) • `f`)) !↝↝<sub>**r**</sub> `t`.

###### Answer

    (f • ((t • f) • f)) r ((t • f) • f)

That’s all, we can’t reduce it any more because we can not apply either rule to ((`t` • `f`) • `f`)

##### Exercise 1.4

###### Question

Show that (`f` • ((`t` • `f`) • `f`)) ↠<sub>**r**</sub> `t` by demonstrating a reduction with →<sub>**r**</sub>.

###### Answer

                                                      (t • f) r t
                                                    ----------------
      (f • ((t • f) • f)) r ((t • f) • f)             (t • f) →r t            (t • f) r t
    ----------------------------------------  ----------------------------  ----------------
      (f • ((t • f) • f)) →r ((t • f) • f)      ((t • f) • f) →r (t • f)      (t • f) →r t
    ----------------------------------------------------------------------------------------
                                    (f • ((t • f) • f)) ↠r t

#### 1.6 Evaluation Function

> - *eval*<sub>**r**</sub>(*B*) = `f` if *B* =<sub>**r**</sub> `f`
> - *eval*<sub>**r**</sub>(*B*) = `t` if *B* =<sub>**r**</sub> `t`

##### Exercise 1.5

###### Question

Among the relations **r**, ≍<sub>**r**</sub>, ≈<sub>**r**</sub>, ↝↝<sub>**r**</sub>, →<sub>**r**</sub>,
↠<sub>**r**</sub>, =<sub>**r**</sub>, and *eval*<sub>**r**</sub>, which are functions? For each non-function relation,
find an expression and two expressions that it relates to.

###### Answer

Relation **r** and *eval*<sub>**r**</sub> are functions.

≍<sub>**r**</sub> is not function:

    (t • B1) ≍r B1
    (t • B1) ≍r (t • B1)

≈<sub>**r**</sub> is not function:

    (t • B1) ≈r B1
    (t • B1) ≈r (t • B1)

↝↝<sub>**r**</sub> is not function:

    (t • B1) ↝↝r (t • B1)
    (t • B1) ↝↝r t

→<sub>**r**</sub> is not function:

    ((t • B1) • (t • B1)) →r (t • (t • B1))
    ((t • B1) • (t • B1)) →r ((t • B1) • t)

↠<sub>**r**</sub> is not function:

    (t • B1) ↠r (t • B1)
    (t • B1) ↠r t

=<sub>**r**</sub> is not function:

    (t • B1) =r (t • B1)
    (t • B1) =r t

### Chapter 2: Structural Induction

#### 2.1 Detecting the Need for Structural Induction

> - *P* = *α* \| (*β*⊗*P*) \| (*P*⊙*P*)

> **Theorem 2.2**: For any *P*, *P* contains at least one *α*.

##### Exercise 2.1

###### Question

Prove Theorem 2.2.

###### Answer

- Base case:
    - **Case** *α*

        *α* contains one *α*, the claim holds.

- Inductive cases:
    - **Case** (*β*⊗*P*)

        By induction, *P* contains at least one *α*, therefore (*β*⊗*P*) contains at least one *α*, the claim holds.

    - **Case** (*P*⊙*P*)

        By induction, *P* contains at least one *α*, therefore (*P*⊗*P*) contains at least two *α*, the claim holds.

#### 2.2 Definitions with Ellipses

> - *W* = *α* \| (*β**W**W*…*W*)

Or more precisely:

> - *W* = *α* \| (*β**Y*)
> - *Y* = *W* \| *Y**W*

> **Theorem 2.4**: For any *W*, each *β* in *W* is preceded by an open parenthesis.

##### Exercise 2.2

###### Question

Prove Theorem 2.4.

###### Answer

- Base case:
    - **Case** *α*

        *α* contains no *β*, the claim holds.

- Inductive case:
    - **Case** (*β**W**W*…*W*)

        By induction, each *β* in *W* is preceded by an open parenthesis, therefore each *β* in the sequence of *W* is
        preceded by an open parenthesis. Also, the other *β* outside of the sequence of *W* is preceded by an open
        parenthesis, so that all the *β*s in this case is preceded by open parenthesises, the claim holds.
