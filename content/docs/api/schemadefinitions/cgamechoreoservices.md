---
title: CGameChoreoServices
---

# Interface CGameChoreoServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGameChoreoServices : IChoreoServices, ISchemaClass<IChoreoServices>, ISchemaClass<CGameChoreoServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [IChoreoServices](/docs/api/schemadefinitions/ichoreoservices)
- [ISchemaClass<IChoreoServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CGameChoreoServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChoreoState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L24)

```csharp
ref IChoreoServices__ChoreoState_t ChoreoState { get; }
```

#### Property Value

- [IChoreoServices__ChoreoState_t](/docs/api/schemadefinitions/ichoreoservices__choreostate_t)

### Owner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L18)

```csharp
ref CHandle<CBaseAnimGraph> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)>

### ScriptState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L22)

```csharp
ref IChoreoServices__ScriptState_t ScriptState { get; }
```

#### Property Value

- [IChoreoServices__ScriptState_t](/docs/api/schemadefinitions/ichoreoservices__scriptstate_t)

### ScriptedSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L20)

```csharp
ref CHandle<CScriptedSequence> ScriptedSequence { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CScriptedSequence](/docs/api/schemadefinitions/cscriptedsequence)>

### TimeStartedState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L26)

```csharp
GameTime_t TimeStartedState { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

