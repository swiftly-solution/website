---
title: I>
---

# Struct CUtlLeanVector

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L12)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlLeanVector<T, I> : IDisposable, IEnumerable<T>, IEnumerable where I : unmanaged, IBinaryInteger<I>, IMinMaxValue<I>
```

#### Type Parameters

- **T**: 
- **I**: 

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)
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

### CUtlLeanVector(I, I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L47)

Please use <xref href="SwiftlyS2.Shared.Natives.ManagedCUtlLeanVector%602" data-throw-if-not-resolved="false"></xref> instead to construct it.
If you really want to use this, you should call <xref href="SwiftlyS2.Shared.Natives.CUtlLeanVector%602.Purge" data-throw-if-not-resolved="false"></xref> after you are done with it.

```csharp
public CUtlLeanVector(I growSize, I initSize)
```

#### Parameters

- **growSize**: I
- **initSize**: I

### CUtlLeanVector(nint, I, I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L58)

Please use <xref href="SwiftlyS2.Shared.Natives.ManagedCUtlLeanVector%602" data-throw-if-not-resolved="false"></xref> instead to construct it.
If you really want to use this, you should call <xref href="SwiftlyS2.Shared.Natives.CUtlLeanVector%602.Purge" data-throw-if-not-resolved="false"></xref> after you are done with it.

```csharp
public CUtlLeanVector(nint memory, I allocationCount, I numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: I
- **numElements**: I

## Fields

### Allocated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L18)

```csharp
public I Allocated
```

#### Field Value

- I

### Count

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L17)

```csharp
public I Count
```

#### Field Value

- I

### Elements

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L19)

```csharp
public nint Elements
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Properties

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L292)

```csharp
public nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### ElementSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L39)

```csharp
public int ElementSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ExternallyAllocated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L291)

```csharp
public bool ExternallyAllocated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumAllocated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L290)

```csharp
public int NumAllocated { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L293)

```csharp
public ref T this[I index] { get; }
```

#### Property Value

- T

## Methods

### AddToTail()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L159)

```csharp
public I AddToTail()
```

#### Returns

- I

### AddToTail(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L165)

```csharp
public I AddToTail(T element)
```

#### Parameters

- **element**: T

#### Returns

- I

### AssumeMemory(nint, I, I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L103)

```csharp
public void AssumeMemory(nint memory, I allocationCount, I numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: I
- **numElements**: I

### DetachMemory()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L112)

```csharp
public nint DetachMemory()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Dispose()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L275)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### Element(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L147)

```csharp
public ref T Element(I idx)
```

#### Parameters

- **idx**: I

#### Returns

- T

### EnsureCapacity(int, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L65)

```csharp
public void EnsureCapacity(int num, bool force)
```

#### Parameters

- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **force**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FastRemove(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L199)

```csharp
public void FastRemove(I elem)
```

#### Parameters

- **elem**: I

### Find(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L188)

```csharp
public I Find(T element)
```

#### Parameters

- **element**: T

#### Returns

- I

### FindAndFastRemove(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L262)

```csharp
public bool FindAndFastRemove(T value)
```

#### Parameters

- **value**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FindAndRemove(T)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L251)

```csharp
public bool FindAndRemove(T value)
```

#### Parameters

- **value**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEnumerator()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L280)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

- [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<T> - An enumerator that can be used to iterate through the collection.

### Head()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L155)

```csharp
public ref T Head()
```

#### Returns

- T

### IsIdxValid(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L146)

```csharp
public bool IsIdxValid(I idx)
```

#### Parameters

- **idx**: I

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValidIndex(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L157)

```csharp
public bool IsValidIndex(I idx)
```

#### Parameters

- **idx**: I

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Purge()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L134)

```csharp
public void Purge()
```

### Remove(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L213)

```csharp
public void Remove(I elem)
```

#### Parameters

- **elem**: I

### RemoveAll()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L123)

```csharp
public void RemoveAll()
```

### RemoveMultiple(I, I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L223)

```csharp
public void RemoveMultiple(I idx, I count)
```

#### Parameters

- **idx**: I
- **count**: I

### RemoveMultipleFromHead(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L235)

```csharp
public void RemoveMultipleFromHead(I count)
```

#### Parameters

- **count**: I

### RemoveMultipleFromTail(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L240)

```csharp
public void RemoveMultipleFromTail(I count)
```

#### Parameters

- **count**: I

### SetCount(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L172)

```csharp
public void SetCount(I count)
```

#### Parameters

- **count**: I

### SetExternalBuffer(nint, I, I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L94)

```csharp
public void SetExternalBuffer(nint memory, I allocationCount, I numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: I
- **numElements**: I

### SetSize(I)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L273)

```csharp
public void SetSize(I size)
```

#### Parameters

- **size**: I

### Tail()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L156)

```csharp
public ref T Tail()
```

#### Returns

- T

