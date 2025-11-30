---
title: CFeMorphLayer
---

# Interface CFeMorphLayer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFeMorphLayer : ISchemaClass<CFeMorphLayer>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CFeMorphLayer>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### GoalDamping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L30)

```csharp
ref CUtlVector<float> GoalDamping { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### GoalStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L28)

```csharp
ref CUtlVector<float> GoalStrength { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### Gravity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L26)

```csharp
ref CUtlVector<float> Gravity { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### InitPos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L24)

```csharp
ref CUtlVector<Vector> InitPos { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[Vector](/docs/api/natives/vector)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### NameHash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L20)

```csharp
ref uint NameHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Nodes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFeMorphLayer.cs#L22)

```csharp
ref CUtlVector<ushort> Nodes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

