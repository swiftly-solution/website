---
title: CFeMorphLayer
---

```csharp
public interface CFeMorphLayer : ISchemaClass<CFeMorphLayer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### GoalDamping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L30)

```csharp
ref CUtlVector<float> GoalDamping { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### GoalStrength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L28)

```csharp
ref CUtlVector<float> GoalStrength { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Gravity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L26)

```csharp
ref CUtlVector<float> Gravity { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### InitPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L24)

```csharp
ref CUtlVector<Vector> InitPos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L20)

```csharp
ref uint NameHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Nodes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L22)

```csharp
ref CUtlVector<ushort> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

