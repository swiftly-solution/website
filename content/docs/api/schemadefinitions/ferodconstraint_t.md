---
title: FeRodConstraint_t
---

# Interface FeRodConstraint_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeRodConstraint_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface FeRodConstraint_t : ISchemaClass<FeRodConstraint_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<FeRodConstraint_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MaxDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeRodConstraint_t.cs#L20)

```csharp
ref float MaxDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeRodConstraint_t.cs#L22)

```csharp
ref float MinDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Node

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeRodConstraint_t.cs#L18)

```csharp
ISchemaFixedArray<ushort> Node { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/schemas/ischemafixedarrayt)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### RelaxationFactor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeRodConstraint_t.cs#L26)

```csharp
ref float RelaxationFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Weight0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/FeRodConstraint_t.cs#L24)

```csharp
ref float Weight0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

