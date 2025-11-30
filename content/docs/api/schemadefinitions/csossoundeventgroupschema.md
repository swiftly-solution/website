---
title: CSosSoundEventGroupSchema
---

# Interface CSosSoundEventGroupSchema

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSosSoundEventGroupSchema : ISchemaClass<CSosSoundEventGroupSchema>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSosSoundEventGroupSchema>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Actions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L48)

```csharp
ref CUtlVector<PointerTo<CSosGroupActionSchema>> Actions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CSosGroupActionSchema](/docs/api/schemadefinitions/csosgroupactionschema)>>

### Behavior_EntIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L36)

```csharp
ref SosGroupFieldBehavior_t Behavior_EntIndex { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_EventName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L28)

```csharp
ref SosGroupFieldBehavior_t Behavior_EventName { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_Opvar

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L40)

```csharp
ref SosGroupFieldBehavior_t Behavior_Opvar { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/schemadefinitions/sosgroupfieldbehavior_t)

### Behavior_String

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L44)

```csharp
ref SosGroupFieldBehavior_t Behavior_String { get; }
```

#### Property Value

- [SosGroupFieldBehavior_t](/docs/api/schemadefinitions/sosgroupfieldbehavior_t)

### BlockMaxCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L22)

```csharp
ref int BlockMaxCount { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BlocksEvents

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L20)

```csharp
ref bool BlocksEvents { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EntIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L38)

```csharp
ref float EntIndex { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GroupType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L18)

```csharp
ref SosGroupType_t GroupType { get; }
```

#### Property Value

- [SosGroupType_t](/docs/api/schemadefinitions/sosgrouptype_t)

### InvertMatch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L26)

```csharp
ref bool InvertMatch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchEventSubString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L32)

```csharp
ref bool MatchEventSubString { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MatchSoundEventName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L30)

```csharp
string MatchSoundEventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MatchSoundEventSubString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L34)

```csharp
string MatchSoundEventSubString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MemberLifespanTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L24)

```csharp
ref float MemberLifespanTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Opvar

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L42)

```csharp
ref float Opvar { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### OpvarString

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSosSoundEventGroupSchema.cs#L46)

```csharp
string OpvarString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

