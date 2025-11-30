---
title: CTwistConstraint
---

# Interface CTwistConstraint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTwistConstraint.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CTwistConstraint : CBaseConstraint, CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaClass<CTwistConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseConstraint](/docs/api/schemadefinitions/cbaseconstraint)
- [CBoneConstraintBase](/docs/api/schemadefinitions/cboneconstraintbase)
- [ISchemaClass<CBoneConstraintBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CTwistConstraint>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChildBindRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTwistConstraint.cs#L22)

```csharp
ref Quaternion ChildBindRotation { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

### Inverse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTwistConstraint.cs#L18)

```csharp
ref bool Inverse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParentBindRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTwistConstraint.cs#L20)

```csharp
ref Quaternion ParentBindRotation { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

