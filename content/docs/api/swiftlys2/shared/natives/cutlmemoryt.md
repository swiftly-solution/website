---
title: CUtlMemory<T>
---

```csharp
public struct CUtlMemory<T> where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Inherited Members

## Constructors

**CUtlMemory()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L14)

```csharp
public CUtlMemory()
```

## Properties

**AllocationCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L26)

```csharp
public int AllocationCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**GrowSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L28)

```csharp
public int GrowSize { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Memory** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemory.cs#L24)

```csharp
public nint Memory { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

