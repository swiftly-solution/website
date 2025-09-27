---
title: ManagedCUtlMemory<T>
---

```csharp
public class ManagedCUtlMemory<T> where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Inheritance

#### Inherited Members

## Constructors

**ManagedCUtlMemory(int, int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L8)

```csharp
public ManagedCUtlMemory(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

**Value** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L13)

```csharp
public ref CUtlMemory<T> Value { get; }
```

#### Property Value

- [CUtlMemory](/docs/api/shared/natives/cutlmemory-1)<T>

