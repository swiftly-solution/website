---
title: CUtlVector<T>
---

```csharp
public struct CUtlVector<T> : IEnumerable<T>, IEnumerable where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Implements

#### Inherited Members

## Constructors

**CUtlVector()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L15)

```csharp
public CUtlVector()
```

## Properties

**Memory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L25)

```csharp
public CUtlMemory<T> Memory { get; }
```

#### Property Value

- [CUtlMemory](/docs/api/shared/natives/cutlmemory-1)<T>

**Size** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L23)

```csharp
public int Size { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**this[int]** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L27)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

**GetEnumerator()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVector.cs#L29)

```csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

- [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<T> - An enumerator that can be used to iterate through the collection.

