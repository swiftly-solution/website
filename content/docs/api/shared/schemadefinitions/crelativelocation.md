---
title: CRelativeLocation
---

```csharp
public interface CRelativeLocation : ISchemaClass<CRelativeLocation>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L24)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### RelativeOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L20)

```csharp
ref Vector RelativeOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Type

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L18)

```csharp
ref RelativeLocationType_t Type { get; }
```

#### Property Value

- [RelativeLocationType_t](/docs/api/shared/schemadefinitions/relativelocationtype_t)

### WorldSpacePos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L22)

```csharp
ref Vector WorldSpacePos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

