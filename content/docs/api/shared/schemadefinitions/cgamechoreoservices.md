---
title: CGameChoreoServices
---

```csharp
public interface CGameChoreoServices : IChoreoServices, ISchemaClass<IChoreoServices>, ISchemaClass<CGameChoreoServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ChoreoState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L22)

```csharp
ref IChoreoServices__ChoreoState_t ChoreoState { get; }
```

#### Property Value

- [IChoreoServices__ChoreoState_t](/docs/api/shared/schemadefinitions/ichoreoservices__choreostate_t)

**Owner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L16)

```csharp
ref CHandle<CBaseAnimGraph> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseAnimGraph](/docs/api/shared/schemadefinitions/cbaseanimgraph)>

**ScriptState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L20)

```csharp
ref IChoreoServices__ScriptState_t ScriptState { get; }
```

#### Property Value

- [IChoreoServices__ScriptState_t](/docs/api/shared/schemadefinitions/ichoreoservices__scriptstate_t)

**ScriptedSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L18)

```csharp
ref CHandle<CScriptedSequence> ScriptedSequence { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CScriptedSequence](/docs/api/shared/schemadefinitions/cscriptedsequence)>

**TimeStartedState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameChoreoServices.cs#L24)

```csharp
GameTime_t TimeStartedState { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

