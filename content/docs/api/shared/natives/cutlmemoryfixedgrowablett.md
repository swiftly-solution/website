---
title: TBuffer>
---

```csharp
public struct CUtlMemoryFixedGrowable<T, TBuffer> where T : unmanaged where TBuffer : unmanaged
```

#### Type Parameters

- **T**: 
- **TBuffer**: 

#### Inherited Members

## Constructors

### CUtlMemoryFixedGrowable(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemoryFixedGrowable.cs#L14)

```csharp
public CUtlMemoryFixedGrowable(int size, int growSize = 0)
```

#### Parameters

- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### AllocationCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemoryFixedGrowable.cs#L20)

```csharp
public readonly int AllocationCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Base

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemoryFixedGrowable.cs#L19)

```csharp
public readonly nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

