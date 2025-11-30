---
title: constraint_hingeparams_t
---

# Interface constraint_hingeparams_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface constraint_hingeparams_t : ISchemaClass<constraint_hingeparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<constraint_hingeparams_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Constraint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L24)

```csharp
constraint_breakableparams_t Constraint { get; }
```

#### Property Value

- [constraint_breakableparams_t](/docs/api/schemadefinitions/constraint_breakableparams_t)

### HingeAxis

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L22)

```csharp
constraint_axislimit_t HingeAxis { get; }
```

#### Property Value

- [constraint_axislimit_t](/docs/api/schemadefinitions/constraint_axislimit_t)

### WorldAxisDirection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L20)

```csharp
ref Vector WorldAxisDirection { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### WorldPosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L18)

```csharp
ref Vector WorldPosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

