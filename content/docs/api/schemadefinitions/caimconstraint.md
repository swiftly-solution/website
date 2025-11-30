---
title: CAimConstraint
---

# Interface CAimConstraint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimConstraint.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAimConstraint : CBaseConstraint, CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaClass<CAimConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseConstraint](/docs/api/schemadefinitions/cbaseconstraint)
- [CBoneConstraintBase](/docs/api/schemadefinitions/cboneconstraintbase)
- [ISchemaClass<CBoneConstraintBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CAimConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AimOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimConstraint.cs#L18)

```csharp
ref Quaternion AimOffset { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### UpType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimConstraint.cs#L20)

```csharp
ref uint UpType { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

