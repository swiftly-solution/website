---
title: CUtlVector
---

# Struct CUtlVector

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L10)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlVector<T> : IEnumerable<T>, IEnumerable
```

#### Type Parameters

- **T**: 

#### Implements

- [IEnumerable<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)
- [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CUtlVector(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L22)

Please use <xref href="SwiftlyS2.Shared.Natives.ManagedCUtlVector%601" data-throw-if-not-resolved="false"></xref> instead to construct it.
If you really want to use this, you should call <xref href="SwiftlyS2.Shared.Natives.CUtlVector%601.Purge" data-throw-if-not-resolved="false"></xref> after you are done with it.

```csharp
public CUtlVector(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CUtlVector(nint, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L32)

Please use <xref href="SwiftlyS2.Shared.Natives.ManagedCUtlVector%601" data-throw-if-not-resolved="false"></xref> instead to construct it.
If you really want to use this, you should call <xref href="SwiftlyS2.Shared.Natives.CUtlVector%601.Purge" data-throw-if-not-resolved="false"></xref> after you are done with it.

```csharp
public CUtlVector(nint memory, int allocationCount, int numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **numElements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L240)

```csharp
public nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Capacity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L242)

```csharp
public int Capacity { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Count

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L241)

```csharp
public int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ElementSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L16)

```csharp
public int ElementSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L237)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

### AddToHead(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L107)

```csharp
public int AddToHead(T value)
```

#### Parameters

- **value**: T

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AddToTail(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L112)

```csharp
public int AddToTail(T value)
```

#### Parameters

- **value**: T

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AddVectorToTail(CUtlVector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L117)

```csharp
public int AddVectorToTail(CUtlVector<T> other)
```

#### Parameters

- **other**: [CUtlVector](/docs/api/natives/cutlvectort)<T>

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### AssumeMemory(nint, int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L55)

```csharp
public void AssumeMemory(nint memory, int allocationCount, int numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **numElements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DetachMemory()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L61)

```csharp
public nint DetachMemory()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### EnsureCapacity(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L44)

```csharp
public void EnsureCapacity(int num)
```

#### Parameters

- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FastRemove(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L152)

```csharp
public void FastRemove(int elem)
```

#### Parameters

- **elem**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FillWithValue(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L141)

```csharp
public void FillWithValue(T value)
```

#### Parameters

- **value**: T

### Find(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L130)

```csharp
public int Find(T value)
```

#### Parameters

- **value**: T

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FindAndFastRemove(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L177)

```csharp
public bool FindAndFastRemove(T value)
```

#### Parameters

- **value**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FindAndRemove(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L166)

```csharp
public bool FindAndRemove(T value)
```

#### Parameters

- **value**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEnumerator()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L244)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

- [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<T> - An enumerator that can be used to iterate through the collection.

### GrowVector(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L72)

```csharp
public void GrowVector(int count)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### HasElement(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L147)

```csharp
public bool HasElement(T value)
```

#### Parameters

- **value**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Head()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L238)

```csharp
public ref T Head()
```

#### Returns

- T

### InsertAfter(int, T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L102)

```csharp
public int InsertAfter(int idx, T value)
```

#### Parameters

- **idx**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: T

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InsertAfterIdx(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L89)

```csharp
public int InsertAfterIdx(int elem)
```

#### Parameters

- **elem**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InsertBefore(int, T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L94)

```csharp
public int InsertBefore(int idx, T value)
```

#### Parameters

- **idx**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **value**: T

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### InsertBeforeIdx(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L82)

```csharp
public int InsertBeforeIdx(int elem)
```

#### Parameters

- **elem**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsValidIndex(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L67)

```csharp
public bool IsValidIndex(int index)
```

#### Parameters

- **index**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Purge()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L38)

```csharp
public void Purge()
```

### Remove(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L216)

```csharp
public void Remove(int elem)
```

#### Parameters

- **elem**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAll()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L226)

```csharp
public void RemoveAll()
```

### RemoveMultiple(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L188)

```csharp
public void RemoveMultiple(int idx, int count)
```

#### Parameters

- **idx**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveMultipleFromHead(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L200)

```csharp
public void RemoveMultipleFromHead(int count)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveMultipleFromTail(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L205)

```csharp
public void RemoveMultipleFromTail(int count)
```

#### Parameters

- **count**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetExternalBuffer(nint, int, int, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L49)

```csharp
public void SetExternalBuffer(nint memory, int allocationCount, int numELements, bool readOnly)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **numELements**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **readOnly**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tail()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L239)

```csharp
public ref T Tail()
```

#### Returns

- T

