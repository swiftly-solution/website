---
title: CNmTargetWarpEvent
---

```csharp
public interface CNmTargetWarpEvent : CNmEvent, ISchemaClass<CNmEvent>, ISchemaClass<CNmTargetWarpEvent>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Algorithm** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTargetWarpEvent.cs#L18)

```csharp
ref NmTargetWarpAlgorithm_t Algorithm { get; }
```

#### Property Value

- [NmTargetWarpAlgorithm_t](/docs/api/shared/schemadefinitions/nmtargetwarpalgorithm_t)

**Rule** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTargetWarpEvent.cs#L16)

```csharp
ref NmTargetWarpRule_t Rule { get; }
```

#### Property Value

- [NmTargetWarpRule_t](/docs/api/shared/schemadefinitions/nmtargetwarprule_t)

