---
title: ManagedCUtlMemory
---

# Class ManagedCUtlMemory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Natives](/docs/api/natives)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public class ManagedCUtlMemory<T> : IDisposable where T : unmanaged
```

#### Type Parameters

- **T**: 

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [ManagedCUtlMemory<T>](/docs/api/natives/managedcutlmemoryt)

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ManagedCUtlMemory()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L8)

```csharp
public ManagedCUtlMemory()
```

### ManagedCUtlMemory(int, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L12)

```csharp
public ManagedCUtlMemory(int growSize, int initSize)
```

#### Parameters

- **growSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)
- **initSize**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### Value

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L43)

```csharp
public ref CUtlMemory<T> Value { get; }
```

#### Property Value

- [CUtlMemory](/docs/api/natives/cutlmemoryt)<T>

## Methods

### Dispose()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L22)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### Dispose(bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L28)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

- **disposing**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ~ManagedCUtlMemory()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Natives/Structs/ManagedCUtlMemory.cs#L17)

```csharp
protected ~ManagedCUtlMemory()
```

