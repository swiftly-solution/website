---
title: CStateUpdateData
---

# Interface CStateUpdateData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CStateUpdateData : ISchemaClass<CStateUpdateData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CStateUpdateData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Actions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L24)

```csharp
ref CUtlVector<CStateActionUpdater> Actions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStateActionUpdater](/docs/api/schemadefinitions/cstateactionupdater)>

### IsEndState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L32)

```csharp
SchemaUntypedField IsEndState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### IsPassthrough

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L35)

```csharp
SchemaUntypedField IsPassthrough { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### IsPassthroughRootMotion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L38)

```csharp
SchemaUntypedField IsPassthroughRootMotion { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### IsStartState

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L29)

```csharp
SchemaUntypedField IsStartState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PreEvaluatePassthroughTransitionPath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L41)

```csharp
SchemaUntypedField PreEvaluatePassthroughTransitionPath { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Script

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L20)

```csharp
AnimScriptHandle Script { get; }
```

#### Property Value

- [AnimScriptHandle](/docs/api/schemadefinitions/animscripthandle)

### StateID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L26)

```csharp
AnimStateID StateID { get; }
```

#### Property Value

- [AnimStateID](/docs/api/schemadefinitions/animstateid)

### TransitionIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L22)

```csharp
ref CUtlVector<int> TransitionIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

