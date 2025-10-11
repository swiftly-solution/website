---
title: CStateUpdateData
---

```csharp
public interface CStateUpdateData : ISchemaClass<CStateUpdateData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Actions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L23)

```csharp
ref CUtlVector Actions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **IsEndState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L31)

```csharp
SchemaUntypedField IsEndState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **IsPassthrough** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L34)

```csharp
SchemaUntypedField IsPassthrough { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **IsPassthroughRootMotion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L37)

```csharp
SchemaUntypedField IsPassthroughRootMotion { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **IsStartState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L28)

```csharp
SchemaUntypedField IsStartState { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **PreEvaluatePassthroughTransitionPath** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L40)

```csharp
SchemaUntypedField PreEvaluatePassthroughTransitionPath { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **Script** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L18)

```csharp
AnimScriptHandle Script { get; }
```

#### Property Value

- [AnimScriptHandle](/docs/api/shared/schemadefinitions/animscripthandle)

### **StateID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L25)

```csharp
AnimStateID StateID { get; }
```

#### Property Value

- [AnimStateID](/docs/api/shared/schemadefinitions/animstateid)

### **TransitionIndices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStateUpdateData.cs#L20)

```csharp
ref CUtlVector<int> TransitionIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

