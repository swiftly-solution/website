---
title: CBaseConstraint
---

```csharp
public interface CBaseConstraint : CBoneConstraintBase, ISchemaClass<CBoneConstraintBase>, ISchemaClass<CBaseConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L16)

```csharp
ref CUtlString Name { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**Slaves** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L21)

```csharp
SchemaUntypedField Slaves { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**Targets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L24)

```csharp
ref CUtlVector Targets { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**UpVector** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseConstraint.cs#L18)

```csharp
ref Vector UpVector { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

