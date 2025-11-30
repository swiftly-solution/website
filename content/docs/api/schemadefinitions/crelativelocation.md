---
title: CRelativeLocation
---

# Interface CRelativeLocation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRelativeLocation : ISchemaClass<CRelativeLocation>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CRelativeLocation>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Entity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L24)

```csharp
ref CHandle<CBaseEntity> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### RelativeOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L20)

```csharp
ref Vector RelativeOffset { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L18)

```csharp
ref RelativeLocationType_t Type { get; }
```

#### Property Value

- [RelativeLocationType_t](/docs/api/schemadefinitions/relativelocationtype_t)

### WorldSpacePos

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRelativeLocation.cs#L22)

```csharp
ref Vector WorldSpacePos { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

