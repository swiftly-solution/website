---
title: CStateUpdateData
---

```csharp
public interface CStateUpdateData : ISchemaClass<CStateUpdateData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Actions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L24)

```csharp
ref CUtlVector<CStateActionUpdater> Actions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStateActionUpdater](/docs/api/shared/schemadefinitions/cstateactionupdater)>

### IsEndState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L32)

```csharp
SchemaUntypedField IsEndState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### IsPassthrough

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L35)

```csharp
SchemaUntypedField IsPassthrough { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### IsPassthroughRootMotion

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L38)

```csharp
SchemaUntypedField IsPassthroughRootMotion { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### IsStartState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L29)

```csharp
SchemaUntypedField IsStartState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreEvaluatePassthroughTransitionPath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L41)

```csharp
SchemaUntypedField PreEvaluatePassthroughTransitionPath { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Script

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L20)

```csharp
AnimScriptHandle Script { get; }
```

#### Property Value

- [AnimScriptHandle](/docs/api/shared/schemadefinitions/animscripthandle)

### StateID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L26)

```csharp
AnimStateID StateID { get; }
```

#### Property Value

- [AnimStateID](/docs/api/shared/schemadefinitions/animstateid)

### TransitionIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L22)

```csharp
ref CUtlVector<int> TransitionIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

