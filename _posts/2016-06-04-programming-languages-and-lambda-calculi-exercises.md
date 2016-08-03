---
title: Programming Languages and Lambda Calculi exercises
---

{:exercise: style="background-color: rgba(39, 116, 169, 0.15);"}

The manuscript can be found [here](http://www.cs.utah.edu/~mflatt/past-courses/cs7520/public_html/s06/notes.pdf).

## Part I: Models of Languages

### Chapter 1: Computing with Text

#### 1.1 Defining Sets

> - `t` ∈ *B*
> - `f` ∈ *B*
> - (*B*<sub>1</sub> • *B*<sub>2</sub>) ∈ *B*

> **Exercise 1.1.** Which of the following are in *B*? For each member of *B*, provide a proof tree showing that it must
> be in *B*.
>
> 1. `t`
> 2. •
> 3. ((`f` • `t`) • (`f` • `f`))
> 4. ((`f`) • (`t`))
{: exercise}

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

> ↝↝<sub>**r**</sub> is the reflexive–transitive closure of **r**:
>
> - *B*<sub>1</sub> ↝↝<sub>**r**</sub> *B*<sub>1</sub>
> - *B*<sub>1</sub> **r** *B*<sub>2</sub> ⇒ *B*<sub>1</sub> ↝↝<sub>**r**</sub> *B*<sub>2</sub>
> - *B*<sub>1</sub> ↝↝<sub>**r**</sub> *B*<sub>2</sub> and *B*<sub>2</sub> ↝↝<sub>**r**</sub> *B*<sub>3</sub>
>     ⇒ *B*<sub>1</sub> ↝↝<sub>**r**</sub> *B*<sub>3</sub>

> **Exercise 1.2.** Show that (`f` • (`f` • (`f` • `f`))) ↝↝<sub>**r**</sub> `f` by showing its reduction with the `r`
> one-step relation.
{: exercise}

    (f • (f • (f • f))) r (f • (f • f))
                        r (f • f)
                        r f

#### 1.5 Evaluation in Context

> - *B*<sub>1</sub> **r** *B*<sub>2</sub> ⇒ *B*<sub>1</sub> →<sub>**r**</sub> *B*<sub>2</sub>
> - *B*<sub>1</sub> →<sub>**r**</sub> *B*<sub>1</sub>′
>     ⇒ (*B*<sub>1</sub> • *B*<sub>2</sub>) →<sub>**r**</sub> (*B*<sub>1</sub>′ • *B*<sub>2</sub>)
> - *B*<sub>2</sub> →<sub>**r**</sub> *B*<sub>2</sub>′
>     ⇒ (*B*<sub>1</sub> • *B*<sub>2</sub>) →<sub>**r**</sub> (*B*<sub>1</sub> • *B*<sub>2</sub>′)

> ↠<sub>**r**</sub> is the reflexive–transitive closure of →<sub>**r**</sub>.

> =<sub>**r**</sub> is the equivalence closure of →<sub>**r**</sub>.

> **Exercise 1.3.** Explain why (`f` • ((`t` • `f`) • `f`)) !↝↝<sub>**r**</sub> `t`.
{: exercise}

    (f • ((t • f) • f)) r ((t • f) • f)

That’s all, we can’t reduce it any more because we can not apply either rule to ((`t` • `f`) • `f`).

> **Exercise 1.4.** Show that (`f` • ((`t` • `f`) • `f`)) ↠<sub>**r**</sub> `t` by demonstrating a reduction with
> →<sub>**r**</sub>.
{: exercise}

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

> **Exercise 1.5.** Among the relations **r**, ≍<sub>**r**</sub>, ≈<sub>**r**</sub>, ↝↝<sub>**r**</sub>,
> →<sub>**r**</sub>, ↠<sub>**r**</sub>, =<sub>**r**</sub>, and *eval*<sub>**r**</sub>, which are functions? For each
> non-function relation, find an expression and two expressions that it relates to.
{: exercise}

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

> **Exercise 2.1.** Prove Theorem 2.2.
{: exercise}

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

> - *W* = *α* \| (*βWW*…*W*)
>
> … Or more precisely:
>
> - *W* = *α* \| (*βY*)
> - *Y* = *W* \| *YW*

> **Theorem 2.4**: For any *W*, each *β* in *W* is preceded by an open parenthesis.

> **Exercise 2.2.** Prove Theorem 2.4.
{: exercise}

- Base case:
    - **Case** *α*

        *α* contains no *β*, the claim holds.

- Inductive case:
    - **Case** (*βW*<sub>0</sub>*W*<sub>1</sub>…*W*<sub>*n*</sub>)

        By induction, each *β* in *W* is preceded by an open parenthesis, therefore each *β* in the sequence of *W* is
        preceded by an open parenthesis. Also, the other *β* outside of the sequence of *W* is preceded by an open
        parenthesis, so that all the *β*s in this case is preceded by open parenthesises, the claim holds.

#### 2.3 Induction on Proof Trees

> - △*α* [always]
> - △(*P*<sub>1</sub> ⊙ *P*<sub>2</sub>) if △*P*<sub>1</sub> and △*P*<sub>2</sub>

#### 2.4 Multiple Structures

> **Theorem 2.6**: For all △*P*, *P* contains no *β*s.

> **Theorem 2.7**: For all *P*, either 1) *P* contains a *β*, or 2) △*P*.

> **Exercise 2.3.** Prove Theorem 2.7. The theorem must be proved over a different structure than Theorem 2.6.
{: exercise}

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

> **Exercise 2.4.** Prove Theorem 2.9.
{: exercise}

- Base case:
    - **Case** *α*

        *a* is in *P*, the claim holds.

- Inductive cases:
    - **Case** (*β* ⊗ *V*)

        By induction, *V* is in *P*, so (*β* ⊗ *V*) is in *P*, the claim holds.

> **Exercise 2.5.** Prove Theorem 2.10.
{: exercise}

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

> **Exercise 2.6.** Prove Theorem 2.11. The proof can proceed in two different ways, since the implicit “for all”
> applies to both △*P* and *P* ⋄ *P*′.
{: exercise}

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

> **Theorem 3.2** [**Church-Rosser for** =<sub>**r**</sub>]: If *M* =<sub>**r**</sub> *N*, then there exists an expression
> *L* such that *M* ↠<sub>**r**</sub> *L* and *N* ↠<sub>**r**</sub> *L*.

> **Theorem 3.3** [**Diamond Property for** ↠<sub>**r**</sub>]: If *L* ↠<sub>**r**</sub> *M* and
> *L* ↠<sub>**r**</sub> *N*, then there exists an expression *L*′ such that *M* ↠<sub>**r**</sub> *L*′ and
> *N* ↠<sub>**r**</sub> *L*′.

> **Theorem 3.5**: For any *B*<sub>0</sub>, *eval*<sub>**r**</sub>(*B*<sub>0</sub>) = *R*<sub>0</sub> for some
> *R*<sub>0</sub>.

> **Exercise 3.1.** Prove Theorem 3.3 (formally, instead of using a diagram).
{: exercise}

*L* ↠<sub>**r**</sub> *M* ⇒ *L* =<sub>**r**</sub> *M* ⇒ *M* =<sub>**r**</sub> *L*.

*L* ↠<sub>**r**</sub> *N* ⇒ *L* =<sub>**r**</sub> *N*.

*M* =<sub>**r**</sub> *L* and *L* =<sub>**r**</sub> *N* ⇒ *M* =<sub>**r**</sub> *N*.

Because *M* =<sub>**r**</sub> *N*, by theorem 3.2, there exists an expression *L*′ such that *M* ↠<sub>**r**</sub> *L*′
and *N* ↠<sub>**r**</sub> *L*′.

> **Exercise 3.2.** Prove Theorem 3.5.
{: exercise}

First, we prove this theorem:

**Theorem**: For any *B*<sub>0</sub>, *B*<sub>0</sub> =<sub>**r**</sub> *R*<sub>0</sub> for some *R*<sub>0</sub>.

- Base cases:
    - **Case** `t`

        `t` =<sub>**r**</sub> `t`, the claim holds.

    - **Case** `f`

        `f` =<sub>**r**</sub> `f`, the claim holds.

- Inductive case:
    - **Case** (*B*<sub>1</sub> • *B*<sub>2</sub>)

        By induction, *B*<sub>1</sub> =<sub>**r**</sub> *R*<sub>1</sub> for some *R*<sub>1</sub>, and *B*<sub>2</sub>
        =<sub>**r**</sub> *R*<sub>2</sub> for some *R*<sub>2</sub>. So that (*B*<sub>1</sub> • *B*<sub>2</sub>)
        =<sub>**r**</sub> (*R*<sub>1</sub> • *B*<sub>2</sub>) =<sub>**r**</sub> (*R*<sub>1</sub> • *R*<sub>2</sub>) for
        some *R*<sub>1</sub> and *R*<sub>2</sub>.

        If *R*<sub>1</sub> = `t`, (*B*<sub>1</sub> • *B*<sub>2</sub>) =<sub>**r**</sub> (`t` • *R*<sub>2</sub>)
        =<sub>**r**</sub> `t`, the claim holds.

        Otherwise, *R*<sub>1</sub> = `f`, (*B*<sub>1</sub> • *B*<sub>2</sub>) =<sub>**r**</sub> (`f` • *R*<sub>2</sub>)
        =*R*<sub>2</sub>, the claim holds.

Now we prove Theorem 3.5:

Since *B*<sub>0</sub> =<sub>**r**</sub> *R*<sub>0</sub> for some *R*<sub>0</sub>, if *R*<sub>0</sub> = `t`,
*eval*<sub>**r**</sub>(*B*<sub>0</sub>) = `t`, the claim holds; otherwise *R*<sub>0</sub> = `f`,
*eval*<sub>**r**</sub>(*B*<sub>0</sub>) = `f`, the claim holds. So this theorem is proved.

### Chapter 4: The *λ*-Calculus

#### 4.2 *λ*-Calculus Grammar and Reductions

> - *M*, *N*, *L* = *X* \| (*λX*.*M*) \| (*M* *M*)
> - *X* = a variable: *x*, *y*, …

> - ℱ𝒱(*X*) = {*X*}
> - ℱ𝒱((*λX*.*M*)) = ℱ𝒱(*M*) \ {*X*}
> - ℱ𝒱((*M*<sub>1</sub> *M*<sub>2</sub>)) = ℱ𝒱(*M*<sub>1</sub>) ∪ ℱ𝒱(*M*<sub>2</sub>)

> - *X*<sub>1</sub>[*X*<sub>1</sub> ← *M*] = *M*
> - *X*<sub>2</sub>[*X*<sub>1</sub> ← *M*] = *X*<sub>2</sub> where *X*<sub>1</sub> ≠ *X*<sub>2</sub>
> - (*λX*<sub>1</sub>.*M*<sub>1</sub>)[*X*<sub>1</sub> ← *M*<sub>2</sub>] = (*λX*<sub>1</sub>.*M*<sub>1</sub>)
> - (*λX*<sub>1</sub>.*M*<sub>1</sub>)[*X*<sub>2</sub> ← *M*<sub>2</sub>] =
>     (*λX*<sub>3</sub>.*M*<sub>1</sub>[*X*<sub>1</sub> ← *X*<sub>3</sub>][*X*<sub>2</sub> ← *M*<sub>2</sub>])
>     where *X*<sub>1</sub> ≠ *X*<sub>2</sub>, *X*<sub>3</sub> ∉ ℱ𝒱(*M*<sub>2</sub>)
>     and *X*<sub>3</sub> ∉ ℱ𝒱(*M*<sub>1</sub>) \ {*X*<sub>1</sub>}
> - (*M*<sub>1</sub> *M*<sub>2</sub>)[X ← *M*<sub>3</sub>] =
>     (*M*<sub>1</sub>[*X* ← *M*<sub>3</sub>] *M*<sub>2</sub>[*X* ← *M*<sub>3</sub>])

> **Exercise 4.1.** Reduce the following expressions with →<sub>**n**</sub> until no more
> →<sub>**n**</sub><sup>*β*</sup> reductions are possible. Show all steps.
>
> - (*λx*.*x*)
> - (*λx*.(*λy*.*y* *x*)) (*λy*.*y*) (*λx*.*x* *x*)
> - (*λx*.(*λy*.*y* *x*)) ((*λx*.*x* *x*) (*λx*.*x* *x*))
{: exercise}

- (*λx*.*x*)
- (*λx*.(*λy*.*y* *x*)) (*λy*.*y*) (*λx*.*x* *x*) \\
    →<sub>**n**</sub><sup>*β*</sup> (*λy*.*y* (*λy*.*y*)) (*λx*.*x* *x*) \\
    →<sub>**n**</sub><sup>*β*</sup> (*λx*.*x* *x*) (*λy*.*y*) \\
    →<sub>**n**</sub><sup>*β*</sup> (*λy*.*y*) (*λy*.*y*) \\
    →<sub>**n**</sub><sup>*β*</sup> (*λy*.*y*)
- (*λx*.(*λy*.*y* *x*)) ((*λx*.*x* *x*) (*λx*.*x* *x*)) \\
    →<sub>**n**</sub><sup>*β*</sup> (*λy*.*y* ((*λx*.*x* *x*) (*λx*.*x* *x*))) \\
    →<sub>**n**</sub><sup>*β*</sup> (*λy*.*y* ((*λx*.*x* *x*) (*λx*.*x* *x*))) \\
    →<sub>**n**</sub><sup>*β*</sup> …

> **Exercise 4.2.** Prove the following equivalences by showing reductions.
>
> - (*λx*.*x*) =<sub>**n**</sub> (*λy*.*y*)
> - (*λx*.(*λy*.(*λz*.*z* *z*) *y*) *x*) (*λx*.*x* *x*) =<sub>**n**</sub> (*λa*.*a* ((*λg*.*g*) *a*)) (*λb*.*b* *b*)
> - *λy*.(*λx*.*λy*.*x*) (*y* *y*) =<sub>**n**</sub> *λa*.*λb*.(*a* *a*)
> - (*λf*.*λg*.*λx*.*f* *x* (*g* *x*)) (*λx*.*λy*.*x*) (*λx*.*λy*.*x*) =<sub>**n**</sub> *λx*.*x*
{: exercise}

- **Case** (*λx*.*x*) =<sub>**n**</sub> (*λy*.*y*):
    - (*λx*.*x*) →<sub>**n**</sub><sup>*α*</sup> (*λy*.*y*)
- **Case** (*λx*.(*λy*.(*λz*.*z* *z*) *y*) *x*) (*λx*.*x* *x*) =<sub>**n**</sub> (*λa*.*a* ((*λg*.*g*) *a*)) (*λb*.*b* *b*):
    - (*λx*.(*λy*.(*λz*.*z* *z*) *y*) *x*) (*λx*.*x* *x*) \\
        →<sub>**n**</sub><sup>*η*</sup> (*λy*.(*λz*.*z* *z*) *y*) (*λx*.*x* *x*) \\
        →<sub>**n**</sub><sup>*β*</sup> (*λy*.*y* *y*) (*λx*.*x* *x*)
    - (*λa*.*a* ((*λg*.*g*) *a*)) (*λb*.*b* *b*) \\
        →<sub>**n**</sub><sup>*β*</sup> (*λa*.*a* *a*) (*λb*.*b* *b*) \\
        →<sub>**n**</sub><sup>*α*</sup> (*λy*.*y* *y*) (*λb*.*b* *b*) \\
        →<sub>**n**</sub><sup>*α*</sup> (*λy*.*y* *y*) (*λx*.*x* *x*)
    - So that (*λx*.(*λy*.(*λz*.*z* *z*) *y*) *x*) (*λx*.*x* *x*)
        =<sub>**n**</sub> (*λa*.*a* ((*λg*.*g*) *a*)) (*λb*.*b* *b*)
- **Case** *λy*.(*λx*.*λy*.*x*) (*y* *y*) =<sub>**n**</sub> *λa*.*λb*.(*a* *a*):
    - *λy*.(*λx*.*λy*.*x*) (*y* *y*) \\
        →<sub>**n**</sub><sup>*α*</sup> *λa*.(*λx*.*λy*.*x*) (*a* *a*) \\
        →<sub>**n**</sub><sup>*β*</sup> *λa*.*λy*.(*a* *a*) \\
        →<sub>**n**</sub><sup>*α*</sup> *λa*.*λb*.(*a* *a*)
- **Case** (*λf*.*λg*.*λx*.*f* *x* (*g* *x*)) (*λx*.*λy*.*x*) (*λx*.*λy*.*x*) =<sub>**n**</sub> *λx*.*x*:
    - (*λf*.*λg*.*λx*.*f* *x* (*g* *x*)) (*λx*.*λy*.*x*) (*λx*.*λy*.*x*) \\
        →<sub>**n**</sub><sup>*β*</sup> (*λg*.*λx*.(*λx*.*λy*.*x*) *x* (*g* *x*)) (*λx*.*λy*.*x*) \\
        →<sub>**n**</sub><sup>*β*</sup> (*λg*.*λx*.(*λy*.*x*) (*g* *x*)) (*λx*.*λy*.*x*) \\
        →<sub>**n**</sub><sup>*β*</sup> (*λg*.*λx*.*x*) (*λx*.*λy*.*x*) \\
        →<sub>**n**</sub><sup>*β*</sup> *λx*.*x*

#### 4.3 Encoding Booleans

> - `true` ≐ *λx*.*λy*.*x*
> - `false` ≐ *λx*.*λy*.*y*
> - `if` ≐ *λv*.*λt*.*λf*.*v* *t* *f*

> **Exercise 4.3.** Show that (`if` `true`) =<sub>**n**</sub> `true` and (`if` `false`) =<sub>**n**</sub> `false`.
{: exercise}

(`if` `true`) \\
= ((*λv*.*λt*.*λf*.*v* *t* *f*) (*λx*.*λy*.*x*)) \\
→<sub>**n**</sub><sup>*β*</sup> (*λt*.*λf*.(*λx*.*λy*.*x*) *t* *f*) \\
→<sub>**n**</sub><sup>*β*</sup> (*λt*.*λf*.(*λy*.*t*) *f*) \\
→<sub>**n**</sub><sup>*β*</sup> (*λt*.*λf*.*t*) \\
→<sub>**n**</sub><sup>*α*</sup> (*λx*.*λy*.*x*) \\
= `true`

(`if` `false`) \\
= ((*λv*.*λt*.*λf*.*v* *t* *f*) (*λx*.*λy*.*y*)) \\
→<sub>**n**</sub><sup>*β*</sup> (*λt*.*λf*.(*λx*.*λy*.*y*) *t* *f*) \\
→<sub>**n**</sub><sup>*β*</sup> (*λt*.*λf*.(*λy*.*y*) *f*) \\
→<sub>**n**</sub><sup>*β*</sup> (*λt*.*λf*.*f*) \\
→<sub>**n**</sub><sup>*α*</sup> (*λx*.*λf*.*f*) \\
→<sub>**n**</sub><sup>*α*</sup> (*λx*.*λy*.*y*) \\
= `false`

#### 4.4 Encoding Pairs

>  … In other words, we need functions `mkpair`, `fst`, and `snd` that obey the following equations:
>
> - `fst` (`mkpair` *M* *N*) =<sub>**n**</sub> *M*
> - `snd` (`mkpair` *M* *N*) =<sub>**n**</sub> *N*

> - ⟨*M*, *N*⟩ ≐ `λs`.`s` *M* *N*
> - `mkpair` ≐ *λx*.*λy*.*λs*.*s* *x* *y*
> - `fst` ≐ *λp*.*p* `true`
> - `snd` ≐ *λp*.*p* `false`

> **Exercise 4.4.** Define macros for binary `and` and `or` prefix operators that evaluate in the natural way with
> `true` and `false` (so that `and` `true` `false` =<sub>**n**</sub> `false`, etc.).
{: exercise}

- `and` ≐ *λx*.*λy* `if` *x* *y* `false`
- `or` ≐ *λx*.*λy* `if` *x* `true` *y*

#### 4.4 Encoding Pairs

> **Exercise 4.5.** Show that `mkpair`, `fst`, and `snd` obey the equations at the beginning of this section.
{: exercise}

`fst` (`mkpair` *M* *N*) \\
= (*λp*.*p* `true`) ((*λx*.*λy*.*λs*.*s* *x* *y*) *M* *N*) \\
→<sub>**n**</sub><sup>*β*</sup> ((*λx*.*λy*.*λs*.*s* *x* *y*) *M* *N*) `true` \\
→<sub>**n**</sub><sup>*β*</sup> ((*λy*.*λs*.*s* *M* *y*) *N*) `true` \\
→<sub>**n**</sub><sup>*β*</sup> (*λs*.*s* *M* *N*) `true` \\
→<sub>**n**</sub><sup>*β*</sup> `true` *M* *N* \\
= (*λx*.*λy*.*x*) *M* *N* \\
→<sub>**n**</sub><sup>*β*</sup> (*λy*.*M*) *N* \\
→<sub>**n**</sub><sup>*β*</sup> *M*

`snd` (`mkpair` *M* *N*) \\
= (*λp*.*p* `false`) ((*λx*.*λy*.*λs*.*s* *x* *y*) *M* *N*) \\
→<sub>**n**</sub><sup>*β*</sup> ((*λx*.*λy*.*λs*.*s* *x* *y*) *M* *N*) `false` \\
→<sub>**n**</sub><sup>*β*</sup> ((*λy*.*λs*.*s* *M* *y*) *N*) `false` \\
→<sub>**n**</sub><sup>*β*</sup> (*λs*.*s* *M* *N*) `false` \\
→<sub>**n**</sub><sup>*β*</sup> `false` *M* *N* \\
= (*λx*.*λy*.*y*) *M* *N* \\
→<sub>**n**</sub><sup>*β*</sup> (*λy*.*y*) *N* \\
→<sub>**n**</sub><sup>*β*</sup> *N*

#### 4.5 Encoding Numbers

> - 0 ≐ *λf*.*λx*.*x*
> - 1 ≐ *λf*.*λx*.*f* *x*
> - 2 ≐ *λf*.*λx*.*f* (*f* *x*)
> - 3 ≐ *λf*.*λx*.*f* (*f* (*f* *x*))

> - `add1` ≐ *λn*.*λf*.*λx*.*f* (*n* *f* *x*)

> - `add` ≐ *λn*.*λm*.*m* `add1` *n*

> - `iszero` ≐ *λn*.*n* (*λx*.`false`) `true`

> - `wrap` ≐ *λf*.*λp*.⟨`false`, `if` (`fst` *p*) (`snd` *p*) (*f* (`snd` *p*))⟩

> - `sub1` ≐ *λn*.*λf*.*λx*.`snd` (*n* (`wrap` *f*) ⟨`true`, *x*⟩)

> **Exercise 4.6.** Show that `add1` 1 =<sub>**n**</sub> 2.
{: exercise}

`add1` 1 \\
= (*λn*.*λf*.*λx*.*f* (*n* *f* *x*)) (*λf*.*λx*.*f* *x*) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.*f* ((*λf*.*λx*.*f* *x*) *f* *x*) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.*f* ((*λx*.*f* *x*) *x*) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.*f* ((*λx*.*f* *x*) *x*) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.*f* (*f* *x*) \\
= 2

> **Exercise 4.7.** Show that `iszero` 1 =<sub>**n**</sub> `false`.
{: exercise}

`iszero` 1 \\
= (*λn*.*n* (*λx*.`false`) `true`) (*λf*.*λx*.*f* *x*) \\
→<sub>**n**</sub><sup>*β*</sup> (*λf*.*λx*.*f* *x*) (*λx*.`false`) `true` \\
→<sub>**n**</sub><sup>*β*</sup> (*λx*.(*λx*.`false`) *x*) `true` \\
→<sub>**n**</sub><sup>*β*</sup> (*λx*.`false`) `true` \\
→<sub>**n**</sub><sup>*β*</sup> `false`

> **Exercise 4.8.** Show that `sub1` 1 =<sub>**n**</sub> 0.
{: exercise}

`sub1` 1 \\
= (*λn*.*λf*.*λx*.`snd` (*n* (`wrap` *f*) ⟨`true`, *x*⟩)) (*λf*.*λx*.*f* *x*) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` ((*λf*.*λx*.*f* *x*) (`wrap` *f*) ⟨`true`, *x*⟩) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` ((*λx*.(`wrap` *f*) *x*) ⟨`true`, *x*⟩) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` ((`wrap` *f*) ⟨`true`, *x*⟩) \\
= *λf*.*λx*.`snd` (((*λf*.*λp*.⟨`false`, `if` (`fst` *p*) (`snd` *p*) (*f* (`snd` *p*))⟩) *f*) ⟨`true`, *x*⟩) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` ((*λp*.⟨`false`, `if` (`fst` *p*) (`snd` *p*) (*f* (`snd` *p*))⟩) ⟨`true`, *x*⟩) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` (⟨`false`, `if` (`fst` ⟨`true`, *x*⟩) (`snd` ⟨`true`, *x*⟩) (*f* (`snd` ⟨`true`, *x*⟩))⟩) \\
↠<sub>**n**</sub> *λf*.*λx*.`snd` ⟨`false`, `if` `true` (`snd` ⟨`true`, *x*⟩) (*f* (`snd` ⟨`true`, *x*⟩))⟩ \\
↠<sub>**n**</sub> *λf*.*λx*.`snd` ⟨`false`, (`snd` ⟨`true`, *x*⟩)⟩ \\
↠<sub>**n**</sub> *λf*.*λx*.`snd` ⟨`false`, *x*⟩ \\
↠<sub>**n**</sub> *λf*.*λx*.*x* \\
= 0

> **Exercise 4.9.** Define `mult` using the technique that allowed us to define `add`. In other words, implement (`mult`
> *n* *m*) as *n* additions of *m* to 0 by exploiting the fact that *n* itself applies a function *n* times. Hint: what
> kind of value is (`add` *m*)?
{: exercise}

`mult` ≐ *λn*.*λm*.*λf*.*m* (*n* *f*)

> **Exercise 4.10.** The *λ*-calculus provides no mechanism for signalling an error. What happens when `sub1` is applied
> to 0? What happens when `iszero` is applied to `true`?
{: exercise}

Let’s try:

`sub1` 0 \\
= (*λn*.*λf*.*λx*.`snd` (*n* (`wrap` *f*) ⟨`true`, *x*⟩)) (*λf*.*λx*.*x*) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` ((*λf*.*λx*.*x*) (`wrap` *f*) ⟨`true`, *x*⟩) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` ((*λx*.*x*) ⟨`true`, *x*⟩) \\
→<sub>**n**</sub><sup>*β*</sup> *λf*.*λx*.`snd` ⟨`true`, *x*⟩ \\
↠<sub>**n**</sub> *λf*.*λx*.*x* \\
= 0

`iszero` `true` \\
= (*λn*.*n* (*λx*.`false`)) (*λx*.*λy*.*x*) \\
→<sub>**n**</sub><sup>*β*</sup> (*λx*.*λy*.*x*) (*λx*.`false`) \\
→<sub>**n**</sub><sup>*β*</sup> *λy*.*λx*.`false`

I think that’s it.

#### 4.6 Recursion

##### 4.6.1 Recursion via Self-Application

> **Exercise 4.11.** Define a macro `mksum` such that (`mksum` `mksum`) acts like a “sum” function by consuming a number
> *n* and adding all the numbers from 0 to *n*.
{: exercise}

`mksum` ≐ *λt*.*λn* `if` (`iszero` *n*) 0 (`add` ((*t* *t*) (`sub1` *n*)) *n*)

##### 4.6.3 Fixed Points and the `Y` Combinator

> `Y` ≐ *λf*.(*λx*.*f* (*x* *x*)) (*λx*.*f* (*x* *x*))

> **Exercise 4.12.** Prove that *M* (`Y` *M*) =<sub>**n**</sub> (`Y` *M*) for any *M*.
{: exercise}

(`Y` *M*) \\
= ((*λf*.(*λx*.*f* (*x* *x*)) (*λx*.*f* (*x* *x*))) *M*) \\
→<sub>**n**</sub><sup>*β*</sup> (*λx*.*M* (*x* *x*)) (*λx*.*M* (*x* *x*)) \\
→<sub>**n**</sub><sup>*β*</sup> (*M* ((*λx*.*M* (*x* *x*)) (*λx*.*M* (*x* *x*))))

*M* (`Y` *M*) \\
= *M* ((*λf*.(*λx*.*f* (*x* *x*)) (*λx*.*f* (*x* *x*))) *M*) \\
→<sub>**n**</sub><sup>*β*</sup> (*M* ((*λx*.*M* (*x* *x*)) (*λx*.*M* (*x* *x*))))

The claim holds.

> **Exercise 4.13.** Define an encoding for Lisp cons cells, consisting of the following macros:
>
> - `null`, a constant
> - `cons`, a function that takes two arguments and returns a cons cell
> - `isnull`, a function that returns `true` if its argument is `null`, `false` if it is a cons cell
> - `car`, a function that takes a cons cell and returns its first element
> - `cdr`, a function that takes a cons cell and returns its second element
>
> In particular, your encoding must satisfy the following equations:
>
> - (`isnull` `null`) =<sub>**n**</sub> `true`
> - (`isnull` (`cons` *M* *N*)) =<sub>**n**</sub> `false`
> - (`car` (`cons` *M* *N*)) =<sub>**n**</sub> *M*
> - (`cdr` (`cons` *M* *N*)) =<sub>**n**</sub> *N*
>
> Your encoding need not assign any particular meaning to expressions such as (`car` `null`) or (`car` `cons`).
{: exercise}

- `null` ≐ ⟨`true`, `false`⟩
- `cons` ≐ *λM*.*λN* ⟨`false`, ⟨*M*, *N*⟩⟩
- `isnull` ≐ *λM*.`fst` *M*
- `car` ≐ *λM*.`fst` (`snd` *M*)
- `cdr` ≐ *λM*.`snd` (`snd` *M*)

> **Exercise 4.14.** Using your encoding from the previous exercise, define `length`, which takes a list of booleans and
> returns the number of cons cells in the list. A list of booleans is either `null`, or (`cons` *b* *l*) where *b* is
> `true` or `false` and *l* is a list of booleans.
{: exercise}

`length` ≐ `Y` (*λf*.*λM*.`if` (`isnull` *M*) 0 (`add1` (*f* (`cdr` *M*))))

*Why does the question say “a list of booleans”? I think `length` can be applied to a list of anything.*

#### 4.7 Facts About the *λ*-Calculus

> **Exercise 4.15.** Prove that ((*λx*.*x* *x*) (*λx*.*x* *x*)) has no normal form.
{: exercise}

We can only apply *β* reduction to ((*λx*.*x* *x*) (*λx*.*x* *x*)) using normal order reduction:

((*λx*.*x* *x*) (*λx*.*x* *x*)) *β* ((*λx*.*x* *x*) (*λx*.*x* *x*))

So, after the only reduction we can do, we get the original expression. This leads to a infinite loop, so we can’t reach
a normal form expression, therefore ((*λx*.*x* *x*) (*λx*.*x* *x*)) has no normal form.

## Part II: Models of Realistic Languages

### Chapter 5: ISWIM

#### 5.1 ISWIM Expressions

> - *M*, *N*, *L*, *K* = *X* \| (*λX*.*M*) \| (*M* *M*) \| *b* \| (*o*<sup>*n*</sup> *M* … *M*)
> - *X* = a variable: *x*, *y*, …
> - *b* = a basic constant
> - *o*<sup>*n*</sup> = an *n*-ary primitive operation

> - *b* = {⸢*n*⸣ \| *n* ∈ ℤ}
> - *o*<sup>1</sup> = {`add1`, `sub1`, `iszero`}
> - *o*<sup>2</sup> = {+, −, ∗, ↑}

#### 5.2 ISWIM Reductions

> **Exercise 5.1.** Show a reduction of \\
> (*λw*.(− (*w* ⸢1⸣) ⸢5⸣)) ((*λx*.*x* ⸢10⸣) *λyz*.(+ *z* *y*)) \\
> to a value with →<sub>**v**</sub>.
{: exercise}

(*λw*.(− (*w* ⸢1⸣) ⸢5⸣)) ((*λx*.*x* ⸢10⸣) *λyz*.(+ *z* *y*)) \\
→<sub>**v**</sub> (*λw*.(− (*w* ⸢1⸣) ⸢5⸣)) (*λyz*.(+ *z* *y*) ⸢10⸣) \\
→<sub>**v**</sub> (*λw*.(− (*w* ⸢1⸣) ⸢5⸣)) (*λz*.(+ *z* ⸢10⸣)) \\
→<sub>**v**</sub> (− ((*λz*.(+ *z* ⸢10⸣)) ⸢1⸣) ⸢5⸣) \\
→<sub>**v**</sub> (− (+ ⸢1⸣ ⸢10⸣) ⸢5⸣) \\
→<sub>**v**</sub> (− ⸢11⸣ ⸢5⸣) \\
→<sub>**v**</sub> ⸢6⸣

#### 5.4 Evaluation

> **Exercise 5.2.** Suppose that we try to strengthen the evaluation function as follows:
>
> - *eval*<sub>1</sub>(*M*) = *b* if *M* =<sub>**v**</sub> *b*
> - *eval*<sub>1</sub>(*M*) = `function1` if *M* =<sub>**v**</sub> *λX*.*N* and *N* ≠ *λY*.*N*′ for any *Y*, *N*′
> - *eval*<sub>1</sub>(*M*) = `function+` if *M* =<sub>**v**</sub> *λX*.*λY*.*N*
>
> Is *eval*<sub>1</sub> a function? If so, prove it. If not, provide a counter-example.
{: exercise}

No, *eval*<sub>1</sub> is not a function:

- *λx*.(*λy*.*y*) (*λz*.*z*) =<sub>**v**</sub> *λx*.(*λy*.*y*) (*λz*.*z*)
- *λx*.(*λy*.*y*) (*λz*.*z*) =<sub>**v**</sub> *λx*.*λz*.*z*

So *eval*<sub>1</sub>(*λx*.(*λy*.*y*) (*λz*.*z*)) = `function1`, and
*eval*<sub>1</sub>(*λx*.(*λy*.*y*) (*λz*.*z*)) = `function+`. Therefore *eval*<sub>1</sub> is not a function.

#### 5.5 Consistency

> **Theorem 5.5** [**Diamond Property for** ↠<sub>**v**</sub> ]: If *L* ↠<sub>**v**</sub> *M* and
> *L* ↠<sub>**v**</sub> *N*, then there exists an expression *K* such that *M* ↠<sub>**v**</sub> *K* and
> *N* ↠<sub>**v**</sub> *K*.

> **Theorem 5.6** [**Diamond Property for** ↪<sub>**v**</sub>]: If *L* ↪<sub>**v**</sub> *M* and
> *L* ↪<sub>**v**</sub> *N*, then there exists an expression *K* such that *M* ↪<sub>**v**</sub> *K* and
> *N* ↪<sub>**v**</sub> *K*.

> - *M* ↪<sub>**v**</sub> *N* if *M* =<sub>*α*</sub> *N*
> - (*o*<sup>*n*</sup> *b*<sub>1</sub> … *b*<sub>*n*</sub>) ↪<sub>**v**</sub> δ(*o*<sup>*n*</sup>, *b*<sub>1</sub>, … *b*<sub>*n*</sub>) if δ(*o*<sup>*n*</sup>, *b*<sub>1</sub>, … *b*<sub>*n*</sub>) is defined
> - ((*λX*.*M*) *N*) ↪<sub>**v**</sub> *M*′[*X* ← *V* ] if *M* ↪<sub>**v**</sub> *M*′ and *N* ↪<sub>**v**</sub> *V*
> - (*M* *N*) ↪<sub>**v**</sub> (*M*′ *N*′) if *M* ↪<sub>**v**</sub> *M*′ and *N* ↪<sub>**v**</sub> *N*′
> - (*λX*.*M*) ↪<sub>**v**</sub> (*λX*.*M*′) if *M* ↪<sub>**v**</sub> *M*′ [^1]
> - (*o*<sup>*n*</sup> *M*<sub>1</sub> … *M*<sub>*n*</sub>) ↪<sub>**v**</sub> (*o*<sup>*n*</sup> *M*<sub>1</sub>′ … *M*<sub>*n*</sub>′) if *M*<sub>*i*</sub> ↪<sub>**v**</sub> *M*<sub>*i*</sub>′ , *i* ∈ [1, *n*]

[^1]: Different than the manuscript, I think the manuscript is wrong.

> **Exercise 5.3.** Prove that if *N* ↪<sub>**v**</sub> *N*′, then *M*[*X* ← *N*] ↪<sub>**v**</sub> *M*[*X* ← *N*′].
{: exercise}

Induction over the structure of *M*:

- Base cases
    - **Case** *X*:

        If *M* = *X*, *M*[*X* ← *N*] = *N*, and *M*[*X* ← *N*′] = *N*′, therefore *M*[*X* ← *N*] ↪<sub>**v**</sub>
        *M*[*X* ← *N*′]. Otherwise *M*[*X* ← *N*] = *M*, and *M*[*X* ← *N*′] = *M*, therefore *M*[*X* ← *N*]
        ↪<sub>**v**</sub> *M*[*X* ← *N*′]. The claim holds.

    - **Case** *b*:

        *b*[*X* ← *N*] = *b*, *b*[*X* ← *N*′] = *b*, therefore *b*[*X* ← *N*] ↪<sub>**v**</sub> *b*[*X* ← *N*′], the
        claim holds.

- Inductive cases:
    - **Case** (*λX*′.*M*):

        If *X*′ = *X*, (*λX*′.*M*)[*X* ← *N*] = (*λX*′.*M*), (*λX*′.*M*)[*X* ← *N*′] = (*λX*′.*M*), the claim holds.

        Otherwise, (*λX*′.*M*)[*X* ← *N*] = (*λX*′.*M*[*X* ← *N*]), (*λX*′.*M*)[*X* ← *N*′] = (*λX*′.*M*[*X* ← *N*′]).
        By induction, *M*[*X* ← *N*] ↪<sub>**v**</sub> *M*[*X* ← *N*′], therefore (*λX*′.*M*[*X* ← *N*])
        ↪<sub>**v**</sub> (*λX*′.*M*[*X* ← *N*′]), the claim holds.

    - **Case** (*M*<sub>1</sub> *M*<sub>2</sub>):

        (*M*<sub>1</sub> *M*<sub>2</sub>)[*X* ← *N*] = (*M*<sub>1</sub>[*X* ← *N*] *M*<sub>2</sub>[*X* ← *N*]),
        (*M*<sub>1</sub> *M*<sub>2</sub>)[*X* ← *N*′] = (*M*<sub>1</sub>[*X* ← *N*′] *M*<sub>2</sub>[*X* ← *N*′]). By
        induction, *M*<sub>1</sub>[*X* ← *N*] ↪<sub>**v**</sub> *M*<sub>1</sub>[*X* ← *N*′], *M*<sub>2</sub>[*X* ← *N*]
        ↪<sub>**v**</sub> *M*<sub>2</sub>[*X* ← *N*′], therefore (*M*<sub>1</sub> *M*<sub>2</sub>)[*X* ← *N*]
        ↪<sub>**v**</sub> (*M*<sub>1</sub> *M*<sub>2</sub>)[*X* ← *N*′], the claim holds.

    - **Case** (*o*<sup>*n*</sup> *M* … *M*):

        Analogous to the previous case.

> **Exercise 5.4.** Prove that if *X* ∉ ℱ𝒱(*L*) then *K*[*X* ← *L*][*X*′ ← *M*[*X* ← *L*]] =<sub>*α*</sub>
> *K*[*X*′ ← *M*][*X* ← *L*]
{: exercise}

*TODO.*

> **Exercise 5.5.** Prove that the transitive–reflexive closure of the parallel reduction ↪<sub>**v**</sub> is the same
> as ↠<sub>**v**</sub>. This fact, along with Theorem 5.6, supports the proof of Theorem 5.5.
{: exercise}

*TODO.*

#### 5.6 Observational Equivalence

> **Exercise 5.6.** Consider the following evaluation function *eval*<sub>0</sub>, plus its associated observational
> equivalence relation ≃<sub>0</sub>:
>
> - *eval*<sub>0</sub>(*M*) = `value` if *M* =<sub>**v**</sub> *V* for some *V*
> - *M* ≃<sub>0</sub> *N* if *eval*<sub>0</sub>(*C*[*M*]) = *eval*<sub>0</sub>(*C*[*N*]) for all *C*
>
> Does *M* ≃<sub>0</sub> *N* imply anything about *M* ≃<sub>**v**</sub> *N*? Sketch an argument for your answer.
{: exercise}

*TODO.*
