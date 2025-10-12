---
title: CEntityInstance
---

```csharp
public interface CEntityInstance : ISchemaClass<CEntityInstance>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CScriptComponent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L20)

```csharp
CScriptComponent? CScriptComponent { get; }
```

#### Property Value

- [CScriptComponent](/docs/api/shared/schemadefinitions/cscriptcomponent)?

### DesignerName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L17)

```csharp
string DesignerName { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Entity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L18)

```csharp
CEntityIdentity? Entity { get; }
```

#### Property Value

- [CEntityIdentity](/docs/api/shared/schemadefinitions/centityidentity)?

### Index

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L12)

```csharp
uint Index { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PrivateVScripts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L16)

```csharp
string PrivateVScripts { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### AcceptInput(string, T, CEntityInstance?, CEntityInstance?, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L28)

```csharp
void AcceptInput<T>(string input, T value, CEntityInstance? activator = null, CEntityInstance? caller = null, int outputID = 0)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Input name.
- **value**: T - Input value.
- **activator**: [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)? - Activator entity. Nullable.
- **caller**: [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)? - Caller entity. Nullable.
- **outputID**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Output ID.

#### Type Parameters

- **T**:  - Param type. Support bool, int, uint, long, ulong, float, double, string

### AddEntityIOEvent(string, T, CEntityInstance?, CEntityInstance?, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L39)

```csharp
void AddEntityIOEvent<T>(string input, T value, CEntityInstance? activator = null, CEntityInstance? caller = null, float delay = 0)
```

#### Parameters

- **input**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Input name.
- **value**: T - Input value.
- **activator**: [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)? - Activator entity. Nullable.
- **caller**: [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)? - Caller entity. Nullable.
- **delay**: [float](https://learn.microsoft.com/dotnet/api/system.single) - Delay in seconds.

#### Type Parameters

- **T**:  - Param type. Support bool, int, uint, long, ulong, float, double, string

### Despawn()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L49)

```csharp
void Despawn()
```

### DispatchSpawn(CEntityKeyValues?)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CEntityInstance.cs#L45)

```csharp
void DispatchSpawn(CEntityKeyValues? entityKV = null)
```

#### Parameters

- **entityKV**: [CEntityKeyValues](/docs/api/shared/entitysystem/centitykeyvalues)? - Entity key values. Nullable.

### EntityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityInstance.cs#L22)

```csharp
void EntityUpdated()
```

