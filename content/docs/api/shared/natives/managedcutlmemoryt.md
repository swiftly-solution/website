---
title: ManagedCUtlMemory
---

```csharp
public class ManagedCUtlMemory<T> : IDisposable where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### ManagedCUtlMemory()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L8)

```csharp
public ManagedCUtlMemory()
```

### ManagedCUtlMemory(int, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L12)

```csharp
public ManagedCUtlMemory(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Value

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L43)

```csharp
public ref CUtlMemory<T> Value { get; }
```

#### Property Value

- [CUtlMemory](/docs/api/shared/natives/cutlmemory-1)<T>

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L22)

```csharp
public void Dispose()
```

### Dispose(bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L28)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

- **disposing**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ~ManagedCUtlMemory()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L17)

```csharp
protected ~ManagedCUtlMemory()
```

