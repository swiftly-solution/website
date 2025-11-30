---
title: CMorphConstraint
---

# Interface CMorphConstraint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMorphConstraint : CBaseConstraint, CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaClass<CMorphConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseConstraint](/docs/api/schemadefinitions/cbaseconstraint)
- [CBoneConstraintBase](/docs/api/schemadefinitions/cboneconstraintbase)
- [ISchemaClass<CBoneConstraintBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMorphConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Max

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L24)

```csharp
ref float Max { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Min

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L22)

```csharp
ref float Min { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SlaveChannel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L20)

```csharp
ref int SlaveChannel { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetMorph

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMorphConstraint.cs#L18)

```csharp
string TargetMorph { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

