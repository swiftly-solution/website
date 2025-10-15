---
title: constraint_hingeparams_t
---

```csharp
public interface constraint_hingeparams_t : ISchemaClass<constraint_hingeparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Constraint

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L23)

```csharp
constraint_breakableparams_t Constraint { get; }
```

#### Property Value

- [constraint_breakableparams_t](/docs/api/shared/schemadefinitions/constraint_breakableparams_t)

### HingeAxis

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L21)

```csharp
constraint_axislimit_t HingeAxis { get; }
```

#### Property Value

- [constraint_axislimit_t](/docs/api/shared/schemadefinitions/constraint_axislimit_t)

### WorldAxisDirection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L19)

```csharp
ref Vector WorldAxisDirection { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### WorldPosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/constraint_hingeparams_t.cs#L17)

```csharp
ref Vector WorldPosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

