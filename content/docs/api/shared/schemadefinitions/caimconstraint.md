---
title: CAimConstraint
---

```csharp
public interface CAimConstraint : CBaseConstraint, CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaClass<CAimConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AimOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimConstraint.cs#L18)

```csharp
ref Quaternion AimOffset { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### UpType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimConstraint.cs#L20)

```csharp
ref uint UpType { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

