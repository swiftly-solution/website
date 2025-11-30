---
title: TBuffer>
---

# Struct CUtlMemoryFixedGrowable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemoryFixedGrowable.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public struct CUtlMemoryFixedGrowable<T, TBuffer> where T : unmanaged where TBuffer : unmanaged
```

#### Type Parameters

- **T**: 
- **TBuffer**: 

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CUtlMemoryFixedGrowable(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemoryFixedGrowable.cs#L14)

```csharp
public CUtlMemoryFixedGrowable(int size, int growSize = 0)
```

#### Parameters

- **size**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### AllocationCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemoryFixedGrowable.cs#L20)

```csharp
public readonly int AllocationCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Base

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/CUtlMemoryFixedGrowable.cs#L19)

```csharp
public readonly nint Base { get; }
```

#### Property Value

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

