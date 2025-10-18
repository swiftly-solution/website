---
title: I>
---

```csharp
public struct CUtlLeanVector<T, I> : IDisposable, IEnumerable<T>, IEnumerable where I : unmanaged, IBinaryInteger<I>, IMinMaxValue<I>
```

#### Type Parameters

- **T**: 
- **I**: 

#### Implements

#### Inherited Members

## Constructors

### CUtlLeanVector(I, I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L47)

```csharp
public CUtlLeanVector(I growSize, I initSize)
```

#### Parameters

- **growSize**: I
- **initSize**: I

### CUtlLeanVector(nint, I, I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L58)

```csharp
public CUtlLeanVector(nint memory, I allocationCount, I numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: I
- **numElements**: I

## Fields

### Allocated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L18)

```csharp
public I Allocated
```

#### Field Value

- I

### Count

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L17)

```csharp
public I Count
```

#### Field Value

- I

### Elements

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L19)

```csharp
public nint Elements
```

#### Field Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Properties

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L292)

```csharp
public nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### ElementSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L39)

```csharp
public int ElementSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ExternallyAllocated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L291)

```csharp
public bool ExternallyAllocated { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumAllocated

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L290)

```csharp
public int NumAllocated { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L293)

```csharp
public ref T this[I index] { get; }
```

#### Property Value

- T

## Methods

### AddToTail()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L159)

```csharp
public I AddToTail()
```

#### Returns

- I

### AddToTail(T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L165)

```csharp
public I AddToTail(T element)
```

#### Parameters

- **element**: T

#### Returns

- I

### AssumeMemory(nint, I, I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L103)

```csharp
public void AssumeMemory(nint memory, I allocationCount, I numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: I
- **numElements**: I

### DetachMemory()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L112)

```csharp
public nint DetachMemory()
```

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L275)

```csharp
public void Dispose()
```

### Element(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L147)

```csharp
public ref T Element(I idx)
```

#### Parameters

- **idx**: I

#### Returns

- T

### EnsureCapacity(int, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L65)

```csharp
public void EnsureCapacity(int num, bool force)
```

#### Parameters

- **num**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **force**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FastRemove(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L199)

```csharp
public void FastRemove(I elem)
```

#### Parameters

- **elem**: I

### Find(T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L188)

```csharp
public I Find(T element)
```

#### Parameters

- **element**: T

#### Returns

- I

### FindAndFastRemove(T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L262)

```csharp
public bool FindAndFastRemove(T value)
```

#### Parameters

- **value**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FindAndRemove(T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L251)

```csharp
public bool FindAndRemove(T value)
```

#### Parameters

- **value**: T

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEnumerator()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L280)

```csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

- [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<T> - An enumerator that can be used to iterate through the collection.

### Head()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L155)

```csharp
public ref T Head()
```

#### Returns

- T

### IsIdxValid(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L146)

```csharp
public bool IsIdxValid(I idx)
```

#### Parameters

- **idx**: I

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsValidIndex(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L157)

```csharp
public bool IsValidIndex(I idx)
```

#### Parameters

- **idx**: I

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Purge()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L134)

```csharp
public void Purge()
```

### Remove(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L213)

```csharp
public void Remove(I elem)
```

#### Parameters

- **elem**: I

### RemoveAll()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L123)

```csharp
public void RemoveAll()
```

### RemoveMultiple(I, I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L223)

```csharp
public void RemoveMultiple(I idx, I count)
```

#### Parameters

- **idx**: I
- **count**: I

### RemoveMultipleFromHead(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L235)

```csharp
public void RemoveMultipleFromHead(I count)
```

#### Parameters

- **count**: I

### RemoveMultipleFromTail(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L240)

```csharp
public void RemoveMultipleFromTail(I count)
```

#### Parameters

- **count**: I

### SetCount(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L172)

```csharp
public void SetCount(I count)
```

#### Parameters

- **count**: I

### SetExternalBuffer(nint, I, I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L94)

```csharp
public void SetExternalBuffer(nint memory, I allocationCount, I numElements)
```

#### Parameters

- **memory**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)
- **allocationCount**: I
- **numElements**: I

### SetSize(I)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L273)

```csharp
public void SetSize(I size)
```

#### Parameters

- **size**: I

### Tail()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlLeanVector.cs#L156)

```csharp
public ref T Tail()
```

#### Returns

- T

