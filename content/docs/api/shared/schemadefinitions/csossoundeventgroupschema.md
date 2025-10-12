---
title: CSosSoundEventGroupSchema
---

```csharp
public interface CSosSoundEventGroupSchema : ISchemaClass<CSosSoundEventGroupSchema>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Actions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L46)

```csharp
ref CUtlVector<PointerTo<CSosGroupActionSchema>> Actions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CSosGroupActionSchema](/docs/api/shared/schemadefinitions/csosgroupactionschema)>>

### Behavior_EntIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L34)

```csharp
ref SosGroupFieldBehavior_t Behavior_EntIndex { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_EventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L26)

```csharp
ref SosGroupFieldBehavior_t Behavior_EventName { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_Opvar

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L38)

```csharp
ref SosGroupFieldBehavior_t Behavior_Opvar { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_String

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L42)

```csharp
ref SosGroupFieldBehavior_t Behavior_String { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/shared/schemadefinitions/sosgroupfieldbehavior_t)

### BlockMaxCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L20)

```csharp
ref int BlockMaxCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BlocksEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L18)

```csharp
ref bool BlocksEvents { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L36)

```csharp
ref float EntIndex { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroupType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L16)

```csharp
ref SosGroupType_t GroupType { get; }
```

#### Property Value

- [SosGroupType_t](/docs/api/shared/schemadefinitions/sosgrouptype_t)

### InvertMatch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L24)

```csharp
ref bool InvertMatch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchEventSubString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L30)

```csharp
ref bool MatchEventSubString { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchSoundEventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L28)

```csharp
string MatchSoundEventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MatchSoundEventSubString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L32)

```csharp
string MatchSoundEventSubString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MemberLifespanTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L22)

```csharp
ref float MemberLifespanTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Opvar

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L40)

```csharp
ref float Opvar { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OpvarString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L44)

```csharp
string OpvarString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

