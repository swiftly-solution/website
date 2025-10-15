---
title: TKey>
---

```csharp
public struct CUtlRBTree<TValue, TKey> : IDisposable where TKey : unmanaged, IBinaryInteger<TKey>, IMinMaxValue<TKey>
```

#### Type Parameters

- **TValue**: 
- **TKey**: 

#### Implements

#### Inherited Members

## Constructors

### CUtlRBTree(TKey, TKey, LessFunc)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L27)

```csharp
public CUtlRBTree(TKey growSize, TKey initSize, CUtlRBTree<TValue, TKey>.LessFunc func)
```

#### Parameters

- **growSize**: TKey
- **initSize**: TKey
- **func**: [CUtlRBTree](/docs/api/shared/natives/cutlrbtree-2)<TValue, TKey>.[LessFunc](/docs/api/shared/natives/cutlrbtree-2/lessfunc)

### CUtlRBTree(LessFunc)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L37)

```csharp
public CUtlRBTree(CUtlRBTree<TValue, TKey>.LessFunc func)
```

#### Parameters

- **func**: [CUtlRBTree](/docs/api/shared/natives/cutlrbtree-2)<TValue, TKey>.[LessFunc](/docs/api/shared/natives/cutlrbtree-2/lessfunc)

## Fields

### Elements

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L21)

```csharp
public CUtlLeanVector<CUtlRBTreeNode<TKey, TValue>, TKey> Elements
```

#### Field Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CUtlRBTreeNode](/docs/api/shared/natives/cutlrbtreenode-2)<TKey, TValue>, TKey>

### FirstFree

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L24)

```csharp
public TKey FirstFree
```

#### Field Value

- TKey

### LFunc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L20)

```csharp
public CUtlRBTree<TValue, TKey>.LessFunc LFunc
```

#### Field Value

- [CUtlRBTree](/docs/api/shared/natives/cutlrbtree-2)<TValue, TKey>.[LessFunc](/docs/api/shared/natives/cutlrbtree-2/lessfunc)

### LastAlloc

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L25)

```csharp
public CUtlLeanVector<CUtlRBTreeNode<TKey, TValue>, TKey>.Iterator_t LastAlloc
```

#### Field Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CUtlRBTreeNode](/docs/api/shared/natives/cutlrbtreenode-2)<TKey, TValue>, TKey>.[Iterator_t](/docs/api/shared/natives/cutlleanvector-2/iterator_t)

### NumElements

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L23)

```csharp
public TKey NumElements
```

#### Field Value

- TKey

### Root

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L22)

```csharp
public TKey Root
```

#### Field Value

- TKey

## Properties

### Count

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L727)

```csharp
public uint Count { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MaxElement

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L728)

```csharp
public TKey MaxElement { get; }
```

#### Property Value

- TKey

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L726)

```csharp
public ref TValue this[TKey i] { get; }
```

#### Property Value

- TValue

## Methods

### Color(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L87)

```csharp
public NodeColor_t Color(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [NodeColor_t](/docs/api/shared/natives/nodecolor_t)

### Depth()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L71)

```csharp
public int Depth()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L510)

```csharp
public void Dispose()
```

### EnsureCapacity(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L47)

```csharp
public void EnsureCapacity(TKey num)
```

#### Parameters

- **num**: TKey

### Find(TValue)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L457)

```csharp
public TKey Find(TValue value)
```

#### Parameters

- **value**: TValue

#### Returns

- TKey

### FirstInorder()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L515)

```csharp
public TKey FirstInorder()
```

#### Returns

- TKey

### FirstPostorder()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L635)

```csharp
public TKey FirstPostorder()
```

#### Returns

- TKey

### FirstPreorder()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L585)

```csharp
public TKey FirstPreorder()
```

#### Returns

- TKey

### FreeNode(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L108)

```csharp
public void FreeNode(TKey i)
```

#### Parameters

- **i**: TKey

### Insert(TValue)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L708)

```csharp
public TKey Insert(TValue val)
```

#### Parameters

- **val**: TValue

#### Returns

- TKey

### InsertAt(TKey, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L253)

```csharp
public TKey InsertAt(TKey parent, bool leftchild)
```

#### Parameters

- **parent**: TKey
- **leftchild**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

- TKey

### InsertIfNotFound(TValue)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L717)

```csharp
public TKey InsertIfNotFound(TValue val)
```

#### Parameters

- **val**: TValue

#### Returns

- TKey

### InsertRebalance(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L171)

```csharp
public void InsertRebalance(TKey elem)
```

#### Parameters

- **elem**: TKey

### InvalidIndex()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L70)

```csharp
public TKey InvalidIndex()
```

#### Returns

- TKey

### IsBlack(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L86)

```csharp
public bool IsBlack(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLeaf(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L59)

```csharp
public bool IsLeaf(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsLeftChild(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L56)

```csharp
public bool IsLeftChild(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRed(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L85)

```csharp
public bool IsRed(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRightChild(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L57)

```csharp
public bool IsRightChild(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsRoot(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L58)

```csharp
public bool IsRoot(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValid()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L686)

```csharp
public bool IsValid()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValidIndex(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L60)

```csharp
public bool IsValidIndex(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LastInorder()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L573)

```csharp
public TKey LastInorder()
```

#### Returns

- TKey

### LastPreorder()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L616)

```csharp
public TKey LastPreorder()
```

#### Returns

- TKey

### LeftChild(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L54)

```csharp
public ref TKey LeftChild(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### Link(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L406)

```csharp
public void Link(TKey elem)
```

#### Parameters

- **elem**: TKey

### LinkToParent(TKey, TKey, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L231)

```csharp
public void LinkToParent(TKey i, TKey parent, bool isLeft)
```

#### Parameters

- **i**: TKey
- **parent**: TKey
- **isLeft**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Links(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L51)

```csharp
public ref CUtlRBTreeLinks<TKey> Links(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- [CUtlRBTreeLinks](/docs/api/shared/natives/cutlrbtreelinks-1)<TKey>

### NewNode()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L90)

```csharp
public TKey NewNode()
```

#### Returns

- TKey

### NextInorder(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L527)

```csharp
public TKey NextInorder(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### NextPostorder(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L652)

```csharp
public TKey NextPostorder(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### NextPreorder(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L590)

```csharp
public TKey NextPreorder(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### Parent(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L53)

```csharp
public ref TKey Parent(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### PrevInorder(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L550)

```csharp
public TKey PrevInorder(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### PrevPreorder(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L614)

```csharp
public TKey PrevPreorder(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### Purge()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L502)

```csharp
public void Purge()
```

### Reinsert(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L677)

```csharp
public void Reinsert(TKey i)
```

#### Parameters

- **i**: TKey

### Remove(TValue)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L448)

```csharp
public bool Remove(TValue value)
```

#### Parameters

- **value**: TValue

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAll()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L479)

```csharp
public void RemoveAll()
```

### RemoveAt(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L438)

```csharp
public void RemoveAt(TKey elem)
```

#### Parameters

- **elem**: TKey

### RemoveRebalance(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L261)

```csharp
public void RemoveRebalance(TKey elem)
```

#### Parameters

- **elem**: TKey

### RightChild(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L55)

```csharp
public ref TKey RightChild(TKey i)
```

#### Parameters

- **i**: TKey

#### Returns

- TKey

### RotateLeft(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L118)

```csharp
public void RotateLeft(TKey elem)
```

#### Parameters

- **elem**: TKey

### RotateRight(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L144)

```csharp
public void RotateRight(TKey elem)
```

#### Parameters

- **elem**: TKey

### SetColor(TKey, NodeColor_t)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L88)

```csharp
public void SetColor(TKey i, NodeColor_t c)
```

#### Parameters

- **i**: TKey
- **c**: [NodeColor_t](/docs/api/shared/natives/nodecolor_t)

### SetLeftChild(TKey, TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L83)

```csharp
public void SetLeftChild(TKey i, TKey l)
```

#### Parameters

- **i**: TKey
- **l**: TKey

### SetLessFunc(LessFunc)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L703)

```csharp
public void SetLessFunc(CUtlRBTree<TValue, TKey>.LessFunc func)
```

#### Parameters

- **func**: [CUtlRBTree](/docs/api/shared/natives/cutlrbtree-2)<TValue, TKey>.[LessFunc](/docs/api/shared/natives/cutlrbtree-2/lessfunc)

### SetParent(TKey, TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L82)

```csharp
public void SetParent(TKey i, TKey p)
```

#### Parameters

- **i**: TKey
- **p**: TKey

### SetRightChild(TKey, TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L84)

```csharp
public void SetRightChild(TKey i, TKey r)
```

#### Parameters

- **i**: TKey
- **r**: TKey

### Unlink(TKey)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlRBTree.cs#L343)

```csharp
public void Unlink(TKey elem)
```

#### Parameters

- **elem**: TKey

