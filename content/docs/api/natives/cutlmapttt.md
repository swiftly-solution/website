---
title: TIndex>
---

# Struct CUtlMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlMap<TKey, TValue, TIndex> : IDisposable where TIndex : unmanaged, IBinaryInteger<TIndex>, IMinMaxValue<TIndex>
```

#### Type Parameters

- **TKey**: 
- **TValue**: 
- **TIndex**: 

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CUtlMap(TIndex, TIndex, LessFunc)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L12)

```csharp
public CUtlMap(TIndex growSize, TIndex initSize, CUtlRBTree<CUtlMapTreeNode<TKey, TValue>, TIndex>.LessFunc func)
```

#### Parameters

- **growSize**: TIndex
- **initSize**: TIndex
- **func**: [CUtlRBTree](/docs/api/natives/cutlrbtreett)<[CUtlMapTreeNode](/docs/api/natives/cutlmaptreenodett)<TKey, TValue>, TIndex>.[LessFunc](/docs/api/natives/cutlrbtree-2/lessfunc)

### CUtlMap(LessFunc)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L17)

```csharp
public CUtlMap(CUtlRBTree<CUtlMapTreeNode<TKey, TValue>, TIndex>.LessFunc func)
```

#### Parameters

- **func**: [CUtlRBTree](/docs/api/natives/cutlrbtreett)<[CUtlMapTreeNode](/docs/api/natives/cutlmaptreenodett)<TKey, TValue>, TIndex>.[LessFunc](/docs/api/natives/cutlrbtree-2/lessfunc)

## Fields

### Tree

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L10)

```csharp
public CUtlRBTree<CUtlMapTreeNode<TKey, TValue>, TIndex> Tree
```

#### Field Value

- [CUtlRBTree](/docs/api/natives/cutlrbtreett)<[CUtlMapTreeNode](/docs/api/natives/cutlmaptreenodett)<TKey, TValue>, TIndex>

## Properties

### Count

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L29)

```csharp
public int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxElement

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L30)

```csharp
public TIndex MaxElement { get; }
```

#### Property Value

- TIndex

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L27)

```csharp
public ref TValue this[TIndex idx] { get; }
```

#### Property Value

- TValue

## Methods

### Dispose()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L73)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### EnsureCapacity(TIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L22)

```csharp
public void EnsureCapacity(TIndex num)
```

#### Parameters

- **num**: TIndex

### Find(TKey)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L37)

```csharp
public TIndex Find(TKey key)
```

#### Parameters

- **key**: TKey

#### Returns

- TIndex

### FirstInOrdered()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L50)

```csharp
public TIndex FirstInOrdered()
```

#### Returns

- TIndex

### Insert(TKey, TValue)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L35)

```csharp
public TIndex Insert(TKey key, TValue element)
```

#### Parameters

- **key**: TKey
- **element**: TValue

#### Returns

- TIndex

### Insert(TKey)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L36)

```csharp
public TIndex Insert(TKey key)
```

#### Parameters

- **key**: TKey

#### Returns

- TIndex

### InsertOrReplace(TKey, TValue)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L61)

```csharp
public TIndex InsertOrReplace(TKey key, TValue element)
```

#### Parameters

- **key**: TKey
- **element**: TValue

#### Returns

- TIndex

### InvalidIndex()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L33)

```csharp
public TIndex InvalidIndex()
```

#### Returns

- TIndex

### IsValid()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L32)

```csharp
public bool IsValid()
```

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValidIndex(TIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L31)

```csharp
public bool IsValidIndex(TIndex idx)
```

#### Parameters

- **idx**: TIndex

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Key(TIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L28)

```csharp
public ref TKey Key(TIndex idx)
```

#### Parameters

- **idx**: TIndex

#### Returns

- TKey

### LastInOrdered()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L53)

```csharp
public TIndex LastInOrdered()
```

#### Returns

- TIndex

### NextInOrdered(TIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L51)

```csharp
public TIndex NextInOrdered(TIndex idx)
```

#### Parameters

- **idx**: TIndex

#### Returns

- TIndex

### PrevInOrdered(TIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L52)

```csharp
public TIndex PrevInOrdered(TIndex idx)
```

#### Parameters

- **idx**: TIndex

#### Returns

- TIndex

### Purge()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L49)

```csharp
public void Purge()
```

### Reinsert(TKey, TIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L55)

```csharp
public void Reinsert(TKey key, TIndex idx)
```

#### Parameters

- **key**: TKey
- **idx**: TIndex

### Remove(TKey)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L43)

```csharp
public bool Remove(TKey key)
```

#### Parameters

- **key**: TKey

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveAll()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L48)

```csharp
public void RemoveAll()
```

### RemoveAt(TIndex)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L42)

```csharp
public void RemoveAt(TIndex idx)
```

#### Parameters

- **idx**: TIndex

### SetLessFunc(LessFunc)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMap.cs#L34)

```csharp
public void SetLessFunc(CUtlRBTree<CUtlMapTreeNode<TKey, TValue>, TIndex>.LessFunc func)
```

#### Parameters

- **func**: [CUtlRBTree](/docs/api/natives/cutlrbtreett)<[CUtlMapTreeNode](/docs/api/natives/cutlmaptreenodett)<TKey, TValue>, TIndex>.[LessFunc](/docs/api/natives/cutlrbtree-2/lessfunc)

