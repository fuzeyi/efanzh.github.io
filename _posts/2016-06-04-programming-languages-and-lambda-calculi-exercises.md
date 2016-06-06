---
title: Programming Languages and Lambda Calculi exercises
---

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

#### 1.4 Directed Evaluation

> - (`f` • *B*<sub>1</sub>) **r** *B*<sub>1</sub>
> - (`t` • *B*<sub>1</sub>) **r** `t`

##### Exercise 1.2

###### Question

Show that (`f` • (`f` • (`f` • `f`))) ↝↝<sub>**r**</sub> `f` by showing its reduction with the `r` one-step relation.

###### Answer

    (f • (f • (f • f))) r (f • (f • f))
                        r (f • f)
                        r f

#### 1.5 Evaluation in Context

> - *B*<sub>1</sub> **r** *B*<sub>2</sub> ⇒ *B*<sub>1</sub> →<sub>**r**</sub> *B*<sub>2</sub>
> - *B*<sub>1</sub> →<sub>**r**</sub> *B*<sub>1</sub>′ ⇒ (*B*<sub>1</sub> • *B*<sub>2</sub>) →<sub>**r**</sub> (*B*<sub>1</sub>′ • *B*<sub>2</sub>)
> - *B*<sub>2</sub> →<sub>**r**</sub> *B*<sub>2</sub>′ ⇒ (*B*<sub>1</sub> • *B*<sub>2</sub>) →<sub>**r**</sub> (*B*<sub>1</sub> • *B*<sub>2</sub>′)

##### Exercise 1.3

###### Question

Explain why (`f` • ((`t` • `f`) • `f`)) !↝↝<sub>**r**</sub> `t`.

###### Answer

    (f • ((t • f) • f)) r ((t • f) • f)

That’s all, we can’t reduce it any more because we can not apply either rule to ((`t` • `f`) • `f`)

##### Exercise 1.4

###### Question

Show that (`f` • ((`t` • `f`) • `f`)) ↠<sub>**r**</sub> `t` by demonstrating a reduction with →<sub>**r**</sub>.

                                                      (t • f) r t
                                                    ----------------
      (f • ((t • f) • f)) r ((t • f) • f)             (t • f) →r t            (t • f) r t
    ----------------------------------------  ----------------------------  ----------------
      (f • ((t • f) • f)) →r ((t • f) • f)      ((t • f) • f) →r (t • f)      (t • f) →r t
    ----------------------------------------------------------------------------------------
                           (f • ((t • f) • f)) →r ((t • f) • f) ↠r t
