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

##### Exercise 1.2

> - (`f` • *B*<sub>1</sub>) **r** *B*<sub>1</sub>
> - (`t` • *B*<sub>1</sub>) **r** `t`

###### Question

Show that (`f` • (`f` • (`f` • `f`))) ↝↝<sub>**r**</sub> `f` by showing its reduction with the `r` one-step relation.

###### Answer

    (f • (f • (f • f))) r (f • (f • f))
                        r (f • f)
                        r f
