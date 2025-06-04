# Recoil Concepts with Jotai 🔄➡️⚛️

This repository contains my implementation of a Recoil lecture using **Jotai** as the state management library.

## 🎥 Original Lecture

I’m following the concepts from **Week 7.2 Recoil lecture**:  

The logic and project structure are based on the lecture, but all state management is handled with [Jotai](https://jotai.org/) instead of Recoil.

---

## 🎯 Why Jotai Instead of Recoil?

> Recoil is no longer actively maintained, so I decided to learn Jotai, a more modern and lightweight alternative that works well with React's atomic and async patterns.

### 🔍 Recoil vs Jotai

| Concept               | Recoil                    | Jotai                        |
|-----------------------|---------------------------|------------------------------|
| State unit            | Atom                      | Atom                         |
| Derived/computed      | Selector                  | Derived Atom (`get`)         |
| Async support         | Selectors with async      | Async atoms (Suspense-ready) |
| Dev experience        | Requires RecoilRoot       | No special provider needed   |
| Maintenance           | Inactive                  | Actively maintained          |

---
