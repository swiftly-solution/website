---
title: TBuffer>
---

```csharp
public struct CUtlVectorFixedGrowable<T, TBuffer> where T : unmanaged where TBuffer : unmanaged
```

#### Type Parameters

- **T**: 
- **TBuffer**: 

#### Inherited Members

## Constructors

### CUtlVectorFixedGrowable(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L14)

```csharp
public CUtlVectorFixedGrowable(int maxSize, int growSize = 0)
```

#### Parameters

- **maxSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L56)

```csharp
public readonly nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### Count

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L55)

```csharp
public readonly int Count { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L53)

```csharp
public readonly int MaxSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### this

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L41)

```csharp
public ref T this[int index] { get; }
```

#### Property Value

- T

## Methods

### AddToTail(T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L30)

```csharp
public int AddToTail(T value)
```

#### Parameters

- **value**: T

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RemoveAll()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L25)

```csharp
public void RemoveAll()
```

### SetSize(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlVectorFixedGrowable.cs#L20)

```csharp
public void SetSize(int size)
```

#### Parameters

- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

