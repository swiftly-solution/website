---
title: CBaseConstraint
---

# Interface CBaseConstraint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBaseConstraint : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBoneConstraintBase](/docs/api/schemadefinitions/cboneconstraintbase)
- [ISchemaClass<CBoneConstraintBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Slaves

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L22)

```csharp
ref CUtlLeanVector<CConstraintSlave, int> Slaves { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CConstraintSlave](/docs/api/schemadefinitions/cconstraintslave), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Targets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L24)

```csharp
ref CUtlVector<CConstraintTarget> Targets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CConstraintTarget](/docs/api/schemadefinitions/cconstrainttarget)>

### UpVector

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L20)

```csharp
ref Vector UpVector { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

