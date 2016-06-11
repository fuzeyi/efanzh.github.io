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

> =<sub>**r**</sub> is the equivalence closure of →<sub>**r**</sub>.

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

> - *P* = *α* \| (*β* ⊗ *P*) \| (*P* ⊙ *P*)

> **Theorem 2.2**: For any *P*, *P* contains at least one *α*.

##### Exercise 2.1

###### Question

Prove Theorem 2.2.

###### Answer

- Base case:
    - **Case** *α*

        *α* contains one *α*, the claim holds.

- Inductive cases:
    - **Case** (*β* ⊗ *P*)

        By induction, *P* contains at least one *α*, therefore (*β* ⊗ *P*) contains at least one *α*, the claim holds.

    - **Case** (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>)

        By induction, *P* contains at least one *α*, therefore (*P*<sub>1</sub> ⊗ *P*<sub>2</sub>) contains at least
        two *α*s, the claim holds.

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
    - **Case** (*β**W*<sub>0</sub>*W*<sub>1</sub>…*W*<sub>*n*</sub>)

        By induction, each *β* in *W* is preceded by an open parenthesis, therefore each *β* in the sequence of *W* is
        preceded by an open parenthesis. Also, the other *β* outside of the sequence of *W* is preceded by an open
        parenthesis, so that all the *β*s in this case is preceded by open parenthesises, the claim holds.

#### 2.3 Induction on Proof Trees

> - △*α* [always]
> - △(*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) if △*P*<sub>1</sub> and △*P*<sub>2</sub>

#### 2.4 Multiple Structures

> **Theorem 2.6**: For all △*P*, *P* contains no *β*s.

> **Theorem 2.7**: For all *P*, either 1) *P* contains a *β*, or 2) △*P*.

##### Exercise 2.3

###### Question

Prove Theorem 2.7. The theorem must be proved over a different structure than Theorem 2.6.

###### Answer

Induction over the structure of *P*:

- Base case:
    - **Case** *α*

        *α* does not contain a *β*, and △*α*, the claim holds.

- Inductive cases:
    - **Case** (*β* ⊗ *P*)

        There’s a *β* in this case, according to Theorem 2.6, △*P* does not hold, so the claim holds.

    - **Case** (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>)

         If at least one of *P*<sub>1</sub> and *P*<sub>2</sub> contains a *β*, at least one of △*P*<sub>1</sub> and
         △*P*<sub>2</sub> does not hold, so △*P* does not hold. Also, in this case, *P* contains at least one *β*. The
         claim holds.

         If none of *P*<sub>1</sub> and *P*<sub>2</sub> contains a *β*, by induction, △*P*<sub>1</sub> and
         △*P*<sub>1</sub>, so △*P*. Also, in this case, *P* does not contain a *β*, so the claim holds.

#### 2.5 More Definitions and More Proofs

> - ((*β* ⊗ *α*) ⊙ *α*) ⋄ (*β* ⊗ *α*)
> - (*α* ⊙ (*β* ⊗ *α*)) ⋄ *α*
> - (*α* ⊙ *α*) ⋄ *α*
> - (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⋄ (*P*<sub>1</sub>′ ⊙ *P*<sub>2</sub>) if *P*<sub>1</sub> ⋄ *P*<sub>1</sub>′
> - (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⋄ (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>′) if *P*<sub>2</sub> ⋄ *P*<sub>2</sub>′

> - *V* = *α* \| (*β* ⊗ *V*)

> **Theorem 2.9**: Every *V* is in *P*.

> **Theorem 2.10**: If △*P* and *P* is not a *V* , then *P* ⋄ *P*′ for some *P*′.

> **Theorem 2.11**: If △*P* and *P* ⋄ *P*′, then △*P*′.

##### Exercise 2.4

###### Question

Prove Theorem 2.9.

###### Answer

- Base case:
    - **Case** *α*

        *a* is in *P*, the claim holds.

- Inductive cases:
    - **Case** (*β* ⊗ *V*)

        By induction, *V* is in *P*, so (*β* ⊗ *V*) is in *P*, the claim holds.

##### Exercise 2.5

###### Question

Prove Theorem 2.10.

###### Answer

First, we prove the following theorem:

**Theorem**: If △(*P*<sub>1</sub> ⊙ *P*<sub>2</sub>), then (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⋄ *P*′ for some *P*′.

**Proof**: By induction over the structure of (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>).

Since △(*P*<sub>1</sub> ⊙ *P*<sub>2</sub>), △*P*<sub>1</sub> and △*P*<sub>2</sub>.

- **Base case**:
    - **Case** (*α* ⊙ *α*)

        (*α* ⊙ *α*) ⋄ *α*, the claim holds.

- **Inductive cases**:
    - **Case** ((*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⊙ *P*<sub>3</sub>)

        By induction, (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⋄ *P*′ for some *P*′, therefore
        ((*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⊙ *P*<sub>3</sub>) ⋄ (*P*′ ⊙ *P*<sub>3</sub>), the claim holds.

    - **Case** (*P*<sub>3</sub> ⊙ (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>))

        Analogous to the previous case.

Now we prove theorem 2.10.

Induction over the structure of *P*:

- Base case:
    - **Case** *α*

        Since *α* is a *V*, the claim holds.

- Inductive cases:
    - **Case** (*β* ⊗ *P*)

        Since △(*β* ⊗ *P*) does not hold, the claim holds.

    - **Case** (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>)

        (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) is not a *V*. If △(*P*<sub>1</sub> ⊙ *P*<sub>2</sub>), by the theorem we
        just proved, △(*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⋄ *P*′ for some *P*′, the claim holds.

##### Exercise 2.6

###### Question

Prove Theorem 2.11. The proof can proceed in two different ways, since the implicit “for all” applies to both △*P* and
*P* ⋄ *P*′.

###### Answer

Induction over the structure of *P* ⋄ *P*′:

- Base cases:
    - **Case** ((*β* ⊗ *α*) ⊙ *α*) ⋄ (*β* ⊗ *α*)

        △((*β* ⊗ *α*) ⊙ *α*) does not hold, the claim holds.

    - **Case** (*α* ⊙ (*β* ⊗ *α*)) ⋄ *α*

        △(*α* ⊙ (*β* ⊗ *α*)) does not hold, the claim holds.

    - **Case** (*α* ⊙ *α*) ⋄ *α*

        △(*α* ⊙ *α*), and △*α*, the claim holds.

- Inductive cases:
    - **Case** (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⋄ (*P*<sub>1</sub>′ ⊙ *P*<sub>2</sub>)

        △(*P*<sub>1</sub> ⊙ *P*<sub>2</sub>), therefore △*P*<sub>1</sub> and △*P*<sub>2</sub>. Since
        *P*<sub>1</sub> ⋄ *P*<sub>1</sub>′, by induction, △*P*<sub>1</sub>′, therefore
        △(*P*<sub>1</sub>′ ⊙ *P*<sub>2</sub>), the claim holds.

    - **Case** (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) ⋄ (*P*<sub>1</sub> ⊙ *P*<sub>2</sub>′)

        Analogous to the previous case.

### Chapter 3: Consistency of Evaluation

> **Theorem 3.3** [**Diamond Property for** ↠<sub>**r**</sub>]: If *L* ↠<sub>**r**</sub> *M* and
> *L* ↠<sub>r</sub> *N*, then there exists an expression *L*′ such that *M* ↠<sub>**r**</sub> *L*′ and
> *N* ↠<sub>**r**</sub> *L*′.

> **Theorem 3.5**: For any *B*<sub>0</sub>, *eval*<sub>**r**</sub>(*B*<sub>0</sub>) = *R*<sub>0</sub> for some
> *R*<sub>0</sub>.

##### Exercise 3.1

###### Question

Prove Theorem 3.3 (formally, instead of using a diagram).

###### Answer

*TODO.*

##### Exercise 3.2

###### Question

Prove Theorem 3.5.

###### Answer

*TODO.*
