---
title: CTwistConstraint
---

```csharp
public interface CTwistConstraint : CBaseConstraint, CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaClass<CTwistConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ChildBindRotation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTwistConstraint.cs#L20)

```csharp
ref Quaternion ChildBindRotation { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### **Inverse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTwistConstraint.cs#L16)

```csharp
ref bool Inverse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ParentBindRotation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTwistConstraint.cs#L18)

```csharp
ref Quaternion ParentBindRotation { get; }
```

#### Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

