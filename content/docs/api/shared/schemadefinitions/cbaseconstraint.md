---
title: CBaseConstraint
---

```csharp
public interface CBaseConstraint : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Slaves

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L22)

```csharp
ref CUtlLeanVector<CConstraintSlave, int> Slaves { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[CConstraintSlave](/docs/api/shared/schemadefinitions/cconstraintslave), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Targets

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L24)

```csharp
ref CUtlVector<CConstraintTarget> Targets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CConstraintTarget](/docs/api/shared/schemadefinitions/cconstrainttarget)>

### UpVector

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L20)

```csharp
ref Vector UpVector { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

